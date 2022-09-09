import React from 'react'
import {Button} from 'elements'
import Plus from 'assets/icons/plus.svg'

export default function Header() {
  return (
    <header className="spacing-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
				<span className='brand-text'>Product Roadmap</span>
        <Button isPrimary isCompact icon={Plus}>Add New Group</Button>
			</nav>
		</div>
    </header>
  )
}
