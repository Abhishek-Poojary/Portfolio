import { useState, useCallback } from "react"

export const useNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  return { mobileMenuOpen, setMobileMenuOpen, closeMobileMenu, toggleMobileMenu }
}
