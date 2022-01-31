import styled from "styled-components";

export const Button = (props) => {
	return(
		<Container onClick={() => {window.open(`${props.isLinkedTo}`, '_self')}}>
			{props.text}
		</Container>
	)
} 

const Container = styled.button`
	/* From cssbuttons.io by @alexroumi */
	&{
		padding: 15px 25px;
		border: unset;
		border-radius: 15px;
		color: #212121;
		z-index: 1;
		background: #eff2ff;
		position: relative;
		font-weight: 1000;
		font-size: 17px;
		-webkit-box-shadow: rgb(0 0 0 / 20%) 5px 5px 3px;
		box-shadow: rgb(0 0 0 / 20%) 5px 5px 3px;
		transition: all 250ms;
		overflow: hidden;

		:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 0;
			border-radius: 15px;
			background-color: #2E9EFF;
			z-index: -1;
			-webkit-box-shadow: rgb(0 0 0 / 20%) 5px 5px 3px;
			box-shadow: rgb(0 0 0 / 20%) 5px 5px 3px;
			transition: all 400ms
		}

		:hover {
			color: white;
			cursor: pointer;

			:before {
				width: 100%;
			}
		}
	}
`;