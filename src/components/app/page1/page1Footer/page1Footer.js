import { Component } from 'react';

import './page1Footer.scss';

class Page1Footer extends Component {
	render() {
		return (
			<footer>
				<nav>
					<div className="logo">

					</div>
					<div>
						<button>Coffee house</button>
						<button>Our coffee</button>
						<button>For your pleasure</button>
					</div>
				</nav>
				<div>
					<hr/>
					<div></div>
					<hr/>
				</div>
			</footer>
		)
	}
}

export default Page1Footer;