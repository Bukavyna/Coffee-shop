import { Component } from 'react';

import './page1Main2.scss';

class Page1Main2 extends Component {
	render() {
		return (
			<div className="page1Main2">
				<h2>Our best</h2>
				<div className="container">
					<div className="">
						<div className="block"></div>
						<div className="solimo-coffee box">
							<div className="solimo-coffee-img box-img"></div>
							<p className="coffee-name">Solimo Coffee Beans 2 kg</p>
							<p className="price">{this.props.price.coffee1}$</p>
						</div>
					</div>

					<div className="">
						<div className="block"></div>
						<div className="presto-coffee box">
							<div className="presto-coffee-img box-img"></div>
							<p className="coffee-name">Solimo Coffee Beans 2 kg</p>
							<p className="price">{this.props.price.coffee1}$</p>
						</div>
					</div>

					<div className="">
						<div className="block"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">Solimo Coffee Beans 2 kg</p>
							<p className="price">{this.props.price.coffee1}$</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Page1Main2;