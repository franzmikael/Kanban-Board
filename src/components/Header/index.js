import React from 'react'
import Plus from 'assets/icons/plus.svg'

export default function Header() {
  return (
    <header className="spacing-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
				<span class='brand-text'>Product Roadmap</span>
        <button class="btn btn-primary btn-compact" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} ><img src={Plus} style={{paddingRight: '6.5px'}}/> Add New Group</button>
			</nav>
		</div>
    </header>
  )
}
