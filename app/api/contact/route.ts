import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    // Make sure the API key exists
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing')

      return NextResponse.json(
        {
          error: 'Email service is not configured.',
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // Read request body
    const body = await request.json()

    const {
      name,
      company,
      email,
      phone,
      projectType,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: 'Name, email, and message are required.',
        },
        { status: 400 }
      )
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Cox Creative Partners <website@coxcreativepartners.com>',
      to: ['info@coxcreativepartners.com'],

      // When you click Reply, it replies to the customer
      replyTo: email,

      subject: `New Website Inquiry - ${name}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #222222;
          "
        >
          <div
            style="
              background: #0f2747;
              padding: 24px;
              color: #ffffff;
            "
          >
            <h2 style="margin: 0;">
              New Cox Creative Partners Website Inquiry
            </h2>
          </div>

          <div style="padding: 24px;">

            <p>
              A potential client submitted an inquiry through
              the Cox Creative Partners website.
            </p>

            <table
              cellpadding="10"
              cellspacing="0"
              style="
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              "
            >
              <tr>
                <td style="border-bottom: 1px solid #eeeeee;">
                  <strong>Name</strong>
                </td>

                <td style="border-bottom: 1px solid #eeeeee;">
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom: 1px solid #eeeeee;">
                  <strong>Company</strong>
                </td>

                <td style="border-bottom: 1px solid #eeeeee;">
                  ${escapeHtml(company || 'Not provided')}
                </td>
              </tr>

              <tr>
                <td style="border-bottom: 1px solid #eeeeee;">
                  <strong>Email</strong>
                </td>

                <td style="border-bottom: 1px solid #eeeeee;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="border-bottom: 1px solid #eeeeee;">
                  <strong>Phone</strong>
                </td>

                <td style="border-bottom: 1px solid #eeeeee;">
                  ${escapeHtml(phone || 'Not provided')}
                </td>
              </tr>

              <tr>
                <td style="border-bottom: 1px solid #eeeeee;">
                  <strong>Project Type</strong>
                </td>

                <td style="border-bottom: 1px solid #eeeeee;">
                  ${escapeHtml(projectType || 'Not provided')}
                </td>
              </tr>
            </table>

            <h3 style="margin-top: 30px;">
              Message
            </h3>

            <div
              style="
                background: #f5f5f5;
                padding: 18px;
                border-radius: 8px;
                line-height: 1.6;
              "
            >
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </div>

            <p
              style="
                margin-top: 30px;
                font-size: 12px;
                color: #777777;
              "
            >
              Submitted through the Cox Creative Partners website.
            </p>

          </div>
        </div>
      `,
    })

    // Resend returned an error
    if (error) {
      console.error('RESEND ERROR:', error)

      return NextResponse.json(
        {
          error: error.message || 'Unable to send inquiry.',
        },
        { status: 500 }
      )
    }

    console.log('EMAIL SENT:', data?.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry sent successfully.',
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('CONTACT API ERROR:', error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending the inquiry.',
      },
      { status: 500 }
    )
  }
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}