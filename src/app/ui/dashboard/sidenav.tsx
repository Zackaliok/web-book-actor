'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ArrowLeft, House, Images, ImageUp, Mail } from 'lucide-react'

export default function SideNav() {
  const pathname = usePathname()
  // TODO: Add icon support for the links
  return (
    <ul className="menu bg-base-200 rounded-box w-56 h-11/12 m-10 mt-13">
      <li className={'h-full flex flex-col justify-between'}>
        <h2 className="menu-title">Administration Panel</h2>
        <ul
          className={
            'h-full flex flex-col justify-between mt-10 -translate-x-41'
          }
        >
          <div>
            <li>
              <Link
                key={'nav-admin-dashboard'}
                href={'/dashboard'}
                className={clsx(
                  'link link-hover',
                  pathname === '/dashboard' ? 'menu-active' : ''
                )}
              >
                <House color="white" size={16} />
                Home
              </Link>
            </li>
            <li>
              <Link
                key={'nav-admin-pictures'}
                href={'/dashboard/pictures'}
                className={clsx(
                  'link link-hover',
                  pathname === '/dashboard/pictures' ? 'menu-active' : ''
                )}
              >
                <Images color="white" size={16} />
                All pictures
              </Link>
            </li>
            <li>
              <Link
                key={'nav-admin-upload'}
                href={'/dashboard/upload'}
                className={clsx(
                  'link link-hover',
                  pathname === '/dashboard/upload' ? 'menu-active' : ''
                )}
              >
                <ImageUp color="white" size={16} />
                Upload a new picture
              </Link>
            </li>
            <li>
              <Link
                key={'nav-admin-contact'}
                href={'/dashboard/contact'}
                className={clsx(
                  'link link-hover',
                  pathname === '/dashboard/contact' ? 'menu-active' : ''
                )}
              >
                <Mail color="white" size={16} />
                Contact
              </Link>
            </li>
          </div>

          <li>
            <Link
              key={'nav-showroom-home'}
              href={'/'}
              className={'link link-hover'}
            >
              <ArrowLeft color="white" size={16} />
              Back to Showroom
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}
