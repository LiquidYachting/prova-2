import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const pdfContent = `Dossier PDF demo per a ${params.slug}. Integrarem generació real més endavant.`
  return new NextResponse(pdfContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${params.slug}-dossier-demo.txt"`
    }
  })
}
