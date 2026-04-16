import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// On initialise Resend avec la clé qui est dans ton .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // On récupère les données envoyées par le formulaire
    const { name, email, service, message } = await req.json();

    // Envoi du mail via l'API de Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact VOSG\'OC <onboarding@resend.dev>', 
      to: ['vosgocelec@outlook.com'], // Ton adresse de réception
      subject: `⚡ Nouveau projet : ${service} (${name})`,
      replyTo: email, // Permet de répondre directement au client en cliquant sur "Répondre"
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #f1c40f; text-transform: uppercase;">Nouveau message de contact</h2>
          <p><strong>Nom complet :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Besoin :</strong> ${service}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    // Si Resend renvoie une erreur (clé invalide, mauvais format, etc.)
    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // Succès !
    return NextResponse.json({ message: "Email envoyé avec succès", data });

  } catch (error) {
    console.error("Erreur Serveur:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}