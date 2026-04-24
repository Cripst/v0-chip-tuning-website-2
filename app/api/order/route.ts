import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string || 'Not provided';
    const company = formData.get('company') as string || 'Not provided';
    const make = formData.get('make') as string;
    const model = formData.get('model') as string;
    const year = formData.get('year') as string;
    const engine = formData.get('engine') as string;
    const ecu = formData.get('ecu') as string || 'Not provided';
    const tool = formData.get('tool') as string || 'Not provided';
    const service = formData.get('service') as string;
    const options = formData.getAll('options') as string[];
    const notes = formData.get('notes') as string || 'None';
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!name || !email || !make || !model || !year || !engine || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (!notifyEmail) {
      console.error('NOTIFY_EMAIL environment variable not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format options for display
    const optionsMap: Record<string, string> = {
      dpf: 'DPF Delete (+$30)',
      egr: 'EGR Delete (+$20)',
      adblue: 'AdBlue Delete (+$40)',
      pops: 'Pops & Bangs (+$25)',
      launch: 'Launch Control (+$20)',
      speed: 'Speed Limiter Off (+$15)',
    };
    
    const formattedOptions = options.length > 0 
      ? options.map(opt => optionsMap[opt] || opt).join(', ')
      : 'None';

    // File info
    const fileInfo = file && file.size > 0
      ? `${file.name} (${(file.size / 1024).toFixed(2)} KB)`
      : 'No file uploaded';

    // Send email notification to you
    const { error } = await resend.emails.send({
      from: 'TurboTune Pro <onboarding@resend.dev>',
      to: notifyEmail,
      replyTo: email,
      subject: `New Order: ${make} ${model} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626, #991b1b); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Tuning Order</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #111827; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Customer Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Company:</td>
                <td style="padding: 8px 0; color: #111827;">${company}</td>
              </tr>
            </table>
            
            <h2 style="color: #111827; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 30px;">Vehicle Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Vehicle:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${year} ${make} ${model}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Engine:</td>
                <td style="padding: 8px 0; color: #111827;">${engine}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">ECU Type:</td>
                <td style="padding: 8px 0; color: #111827;">${ecu}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Reading Tool:</td>
                <td style="padding: 8px 0; color: #111827;">${tool}</td>
              </tr>
            </table>
            
            <h2 style="color: #111827; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 30px;">Service Requested</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Service:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Options:</td>
                <td style="padding: 8px 0; color: #111827;">${formattedOptions}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">File:</td>
                <td style="padding: 8px 0; color: #111827;">${fileInfo}</td>
              </tr>
            </table>
            
            <h2 style="color: #111827; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 30px;">Additional Notes</h2>
            <p style="color: #374151; line-height: 1.6; background: white; padding: 15px; border-radius: 8px;">${notes || 'No additional notes'}</p>
          </div>
          
          <div style="background: #111827; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 14px;">TurboTune Pro Order Notification</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Order submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
