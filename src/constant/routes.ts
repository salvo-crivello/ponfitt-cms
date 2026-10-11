import type { TMenuGroupId } from "@/types/menu.types"

export abstract class ROUTES {
  public static readonly HOME = "/"
  public static readonly MENU = "/menu"
  public static readonly INFO = "/info"
  public static readonly LUNCH = "/lunch"
  public static readonly PROMO = "/promo"

  public static promo(slug: string) {
    return `${ROUTES.PROMO}/${slug}`
  }

  public static menuGroup(id: TMenuGroupId) {
    return `${ROUTES.MENU}?cat=${id}`
  }
}
