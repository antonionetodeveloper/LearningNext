import styled from "styled-components";



export const Header = styled.header`
	@media only screen and (min-width: 971px) {
		&{
			background-image: url("./wavestart.svg");
			background-position: center;
			background-size: 100vw;
			background-repeat: no-repeat;

			height: 35vh;
			margin-top: -3vw;

			display: flex;
			align-items: center;
			justify-content: space-between;

			h1{
				color: white;
				margin: 0;
				font-size: 5vw;
			}
			
			h1, button{
				margin: 5vw;
				margin-top: 3vw;
			}
		}
	}

	@media only screen and (max-width: 970px) {
		&{
			background-image: url("./wavestart.svg");
			background-position: center;
			background-size: 200vw auto;
			background-repeat: no-repeat;
			margin-top: -3vw;

			display: flex;
			align-items: center;
			justify-content: space-between;

			h1{
				color: white;
				margin: 0;
				font-size: 10vw;
			}
			
			button{
				padding: 4vw;
			}

			h1, button{
				margin: 5vw;
				margin-bottom: 30vw;
			}
		}
	}
`;


export const Main = styled.main`
	@media only screen and (min-width: 971px) {
		&{
			section{
				display: flex;
				align-items: center;
				justify-content: center;

				div{
					text-align: center;
					h2{
						font-size: 3vw;
					}
					p{
						font-size: 1.5vw;
						width: 40vw;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 970px) {
		&{
			.mobile_reversed{flex-direction: column-reverse;}
			section{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				div{
					text-align: center;
					h2{
						font-size: 10vw;
					}
					p{
						font-size: 5vw;
						width: 80vw;
						margin: auto;
					}
				}
			}
		}
	}
	
`;


export const Footer = styled.footer`
	@media only screen and (min-width: 971px) {
		&{
			background-image: url("./wavesend.svg");
			background-position: center;
			background-size: 100vw;
			height: 30vh;
			background-repeat: no-repeat;
	
			display: flex;
			align-items: flex-end;
	
	
			a{
				color: #EFF2FF;
				margin-left: auto;
				margin-right: 2vw;
				margin-bottom: 2vw;
			}
		}
	}

	@media only screen and (max-width: 970px) {
		&{
			background-image: url("./wavesend.svg");
			background-position: center;
			background-size: 150vw;
			background-repeat: no-repeat;
	
			display: flex;
			align-items: flex-end;
	
	
			a{
				color: #EFF2FF;
				margin-top: 20vw;
				margin-left: auto;
				margin-right: 2vw;
				margin-bottom: 2vw;
			}
		}
	}
`;
