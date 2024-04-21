import { Component } from 'react';

import './page2Header.scss';

class Page2Header extends Component {
	render() {
		return (
			<div className="page2Header">
				<nav>
					<div className="logo">
					</div>
					<div>
						<button>Coffee house</button>
						<button>Our coffee</button>
						<button>For your pleasure</button>
					</div>
				</nav>
				<h1>Our Coffee</h1>
			</div>
		)
	}
}

export default Page2Header;