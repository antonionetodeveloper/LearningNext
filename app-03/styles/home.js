import styled from "styled-components";

export const Header = styled.header`
	&{
		background-color: rgba(0, 0, 0, 0.85);
		position: fixed;
		width: 100vw;
		z-index: 1;
		
		nav{
			display: flex;
			justify-content: center;
			gap: 10vw;

			a{
				text-decoration: none;
				color: rgba(233, 233, 233);

				p{
					font-weight: 600;
					font-size: 1.6vw;
				}
			}
		}
	}
`;

export const Main = styled.main`
	&{
		display: flex;
		flex-direction: column;
		justify-content: center;

		section.banner{
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.backgroundVideo {
				object-fit: cover;
				width: 100%;
				height: 100%;
				position: fixed;
				z-index: -1;
				
			}
			div{
				background-color: rgba(0, 0, 0, 0.85);
				width: 70vw;
				margin: auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				border: 1px solid;
				color: #fdfcfc;
				
				h1{
					font-weight: 800;
					margin: 0px;
					font-size: 6vw;
				}
				p{
					font-weight: 400;
					font-style: italic;
					font-size: 2vw;
				}
			}
		}

		section.content{
			background-color: rgba(0, 0, 0, 0.97);
			color: #fdfcfc;
			width: 95vw;
			height: 80vh;
			
			display: flex;
			margin: auto;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 5vw;
			
			div{
				width: 40vw;
				text-align: center;

				h2{
					font-size: 5vw;
					margin: 0px;
				}

				p{
					font-size: 1.5vw;
					text-align: justify;
					
				}
			}

			span{
				border: 1px solid;
				border-color: white;
				img{
					width: 40%;
					border-radius: 1vw;
				}
			}
		}

		margin-bottom: 5vw;
	}
`;


export const Footer = styled.footer`
	&{
		background-color: rgba(0, 0, 0, 0.8);
		padding: 2vw;

		h3{
			color: #fdfcfc;
			margin: 0px;
			text-align: end;
			a{
				color: #fdfcfc;
			}
		}
	}
`;