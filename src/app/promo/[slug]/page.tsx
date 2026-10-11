import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { promos } from "@/content/promos"
import { PromoPage } from "@/views/promo/PromoPage"

type TPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return promos.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: TPageProps): Promise<Metadata> {
  const { slug } = await params

  return { title: promos.find((promo) => promo.slug === slug)?.name.it }
}

export default async function Page({ params }: TPageProps) {
  const { slug } = await params
  const promo = promos.find((item) => item.slug === slug)

  if (!promo) notFound()

  return <PromoPage promo={promo} />
}
