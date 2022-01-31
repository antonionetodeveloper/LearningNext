import styled from "styled-components";

export const Header = styled.header`
	&{
		background-image: url("./wavestart.svg");
		background-position: center;
		background-size: 100vw;
		background-repeat: no-repeat;

		height: 30vh;
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
			margin-top: -1vw;
		}
	}
`;

export const Main = styled.main`
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
`;

export const Footer = styled.footer`
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
`;