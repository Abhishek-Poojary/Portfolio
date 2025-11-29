import { useState } from "react"

export function useNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return { mobileMenuOpen, setMobileMenuOpen }
}
