import { FooterContainer } from "./components/FooterContainer/FooterContainer";
import { Footer } from "./components/Footer/Footer";
import { AppContainer } from "./components/AppContainer/AppContainer";
import "./Styles/theme.css";
import { HeroContainer } from "./components/HeroContainer/HeroContainer";
import { Heading } from "./components/Heading/Heading";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { Tips } from "./components/Tips/Tips";
import { AlignContentLeft } from "./components/AlignContentLeft/AlignContentLeft";
import { Card } from "./components/Card/Card";
import MANEATING from "./assets/images/image-man-eating.webp";
import LOGOICON from "./assets/images/logo.svg";
import { LimitationWraper } from "./components/LimitationWraper/LimitationWraper";
import RIGHTVECTOR from "./assets/images/pattern-curved-line-left.svg";
import LEFTVECTOR from "./assets/images/pattern-curved-line-right.svg";
import { BMI_LIMITATIONS } from "./constans/BMI_LIMITATIONS";

export function App() {
	return (
		<>
			<AppContainer>
				<HeroContainer>
					<Heading
						title={<h1>Body Mass Index Calculator</h1>}
						description={
							"Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being."
						}
						icon={LOGOICON}
					/>
					<FormContainer></FormContainer>
					<img src={RIGHTVECTOR} alt="" className="vector_right" />
				</HeroContainer>
				<AlignContentLeft>
					<img src={MANEATING} alt="Man eating" />
					<Heading
						title={<h2 className="headingM">What your BMI result means</h2>}
						description={
							"A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week."
						}
					/>
				</AlignContentLeft>
				<Tips />
				<LimitationWraper>
					<Heading
						icon={LEFTVECTOR}
						title={<h2 className="headingM">Limitations of BMI</h2>}
						description={
							"Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use."
						}
					/>

					{BMI_LIMITATIONS.map((limit) => {
						return (
							<Card
								key={limit.header}
								icon={limit.icon}
								heading={<h2 className="headingS">{limit.header}</h2>}
								desc={limit.details}
							/>
						);
					})}
				</LimitationWraper>
			</AppContainer>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</>
	);
}
