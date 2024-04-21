import { Component } from 'react';

import './page1.css';

class Page1Header extends Component {

	render() {
		return (
			<header>
				<nav>
					<div className="logo">

					</div>
					<div>
						<button>Coffee house</button>
						<button>Our coffee</button>
						<button>For your pleasure</button>
					</div>
				</nav>
				<h1>Everything You Love About Coffee</h1>
				<p>We makes every day full of energy and taste</p>
				<p>Want to try our beans?</p>
				<button>More</button>
			</header>
		)
	}
}

export default Page1Header;