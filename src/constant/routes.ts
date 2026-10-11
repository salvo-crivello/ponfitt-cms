import type { TMenuGroupId } from "@/types/menu.types"

export abstract class ROUTES {
  public static readonly HOME = "/"
  public static readonly MENU = "/menu"
  public static readonly INFO = "/info"

  public static menuGroup(id: TMenuGroupId) {
    return `${ROUTES.MENU}?cat=${id}`
  }
}
