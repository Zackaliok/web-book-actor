import { render, screen } from '@testing-library/react'
import SideNav from '@/app/ui/dashboard/sidenav'
import { usePathname } from 'next/navigation'

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Type assertion for the mocked hook
const mockedUsePathname = usePathname as jest.Mock

describe('SideNav', () => {
  it('should render all navigation links', () => {
    mockedUsePathname.mockReturnValue('/dashboard') // Set a default pathname
    render(<SideNav />)

    // Check for the title
    expect(
      screen.getByRole('heading', { name: /Administration Panel/i })
    ).toBeInTheDocument()

    // Check for all the main navigation links
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute(
      'href',
      '/dashboard'
    )
    expect(screen.getByRole('link', { name: /All pictures/i })).toHaveAttribute(
      'href',
      '/dashboard/pictures'
    )
    expect(
      screen.getByRole('link', { name: /Upload a new picture/i })
    ).toHaveAttribute('href', '/dashboard/upload')
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute(
      'href',
      '/dashboard/contact'
    )

    // Check for the "Back to Showroom" link
    expect(
      screen.getByRole('link', { name: /Back to Showroom/i })
    ).toHaveAttribute('href', '/')
  })

  it('should apply the "menu-active" class to the active link', () => {
    // Set the pathname to the "pictures" page
    mockedUsePathname.mockReturnValue('/dashboard/pictures')
    render(<SideNav />)

    const picturesLink = screen.getByRole('link', { name: /All pictures/i })
    const homeLink = screen.getByRole('link', { name: /Home/i })

    // The "All pictures" link should be active
    expect(picturesLink).toHaveClass('menu-active')

    // The "Home" link should not be active
    expect(homeLink).not.toHaveClass('menu-active')
  })

  it('should highlight the Home link when at the dashboard root', () => {
    mockedUsePathname.mockReturnValue('/dashboard')
    render(<SideNav />)

    const homeLink = screen.getByRole('link', { name: /Home/i })
    expect(homeLink).toHaveClass('menu-active')
  })

  it('should not have any active links when the path is not in the nav', () => {
    mockedUsePathname.mockReturnValue('/') // e.g., on the showroom page
    render(<SideNav />)

    const homeLink = screen.getByRole('link', { name: /Home/i })
    const picturesLink = screen.getByRole('link', { name: /All pictures/i })
    const uploadLink = screen.getByRole('link', {
      name: /Upload a new picture/i,
    })
    const contactLink = screen.getByRole('link', { name: /Contact/i })

    expect(homeLink).not.toHaveClass('menu-active')
    expect(picturesLink).not.toHaveClass('menu-active')
    expect(uploadLink).not.toHaveClass('menu-active')
    expect(contactLink).not.toHaveClass('menu-active')
  })
})
