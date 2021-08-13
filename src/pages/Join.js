import React from 'react';
import styled from 'styled-components';

// components
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'
import PageBanner from '../components/PageBanner';
import joinService from '../_services/join.service';

// assets
import bannerImage from '../assets/team_seier.jpeg';
import { Title } from '../components/blog.style';

const Section = styled.div`
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #F6F8FC;
	padding: 20px 0 50px 0;
	z-index: 0;
`;

const PositionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`;

const IntroCard = styled.div`
	vertical-align: top;
	padding: 40px;
	margin-top: 20px;
	position: relative;
	display: inline-block;
	overflow: hidden;
	width: 45%;
	min-width: 350px;
	background-color: white;
	font-size: 16px;
`;

function PositionCard({ position, description }) {
	const Card = styled.div`
		position: relative;
		display: inline-block;
		background-color: white;
		vertical-align: top;
		border-radius: 3px;
		padding: 30px;
		margin: 15px;
		overflow: hidden;
		width: 350px;
		max-width: 90vw;
	`;

	const Title = styled.div`
		font-weight: bold;
		font-size: 18px;
		color: black;
	`;

	const Description = styled.div`
		padding: 10px 0;
		font-size: 14px;
		color: rgba(0,0,0,0.6);
	`;

	return (
		<Card>
			<Title>{position}</Title>
			<Description dangerouslySetInnerHTML={{ __html: description }} />
		</Card>
	)
}

function JoinForm() {
	const style = {
		form: {
			backgroundColor: 'white',
			padding: '20px',
			maxWidth: '600px',
			width: '100%',
		},
		text: {
			disclaimer: {
				margin: '20px',
				color: 'rgba(0,0,0,0.6)',
				textAlign: 'center',
			}
		},
		input: {
			text: {
				display: 'block',
				padding: '20px',
				marginBottom: '20px',
				backgroundColor: '#F6F8FC',
				borderRadius: '3px',
				border: 'none',
				width: '100%',
				fontSize: '18px',
				// precent textarea resize
				resize: 'none',
			},
			checkbox: {
				marginRight: '10px',
				backgroundColor: '#F6F8FC',
				width: '20px',
				height: '20px',
			},
			label: {
				paddingLeft: '10px',
				margin: '5px 0',
				fontSize: '18px',
				color: 'rgba(0,0,0,1)',
				display: 'flex',
				alignItems: 'center',
			},
			check: {
				paddingLeft: '10px',
				margin: '5px 0',
				fontSize: '18px',
				color: 'rgba(0,0,0,0.8)',
				display: 'flex',
				alignItems: 'center',
			},
			submit: {
				borderRadius: '3px',
				padding: '6px 9px',
				backgroundColor: '#011A2C',
				boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05),inset 0 1px 0 0 rgba(255,255,255,.2),inset 0 -1px 0 0 rgba(255,255,255,.1),0 1px 3px rgba(0,0,0,.05),0 1px 2px rgba(0,0,0,.1)',
				color: 'white',
				cursor: 'pointer',
				float: 'right',
				fontSize: '16px',
				border: 'none',
			}
		}
	}

	const form = {
		firstname: '',
		lastname: '',
		email: '',
		description: '',
		selectedPositions: [],
	};

	// const positions = ["Marketing", "Mechanical", "Autonomous", "Electrical", "Design", "Group Leader"];
	const positions = ['Project Manager', 'Assistant project manager', 'Head of Finance', 'Technical leader', 'Systems Engineer', 'Mechanical Group Leader', 'Autonomous Group Leader', 'Electrical Group Leader', 'Design Group Leader', 'Marketing Group Leader', 'Open Application']

	const handleCheckbox = (event, position) => {
		if (event.target.value && form.selectedPositions.indexOf(position) === -1) {
			form.selectedPositions.push(position);
		} else {
			form.selectedPositions.splice(form.selectedPositions.indexOf(position), 1);
		}
	}

	const handleInput = (event, key) => {
		form[key] = event.target.value;
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const evaluation = joinService.evaluateForm(form);

		if (evaluation.length === 0) {
			joinService.sendForm(form)
				.then((result) => {
					if (result) {
						alert('Your application is sent. Please check your email for a confirmation');
					} else {
						alert('There was an error while sending your application. Please send your application to post@fuelfighter.no and inform about your issue');
					}
				}).catch(exception => {
					alert('There was an error while sending your application. Please send your application to post@fuelfighter.no and inform about your issue');
				});
		} else {
			evaluation.forEach(error => {
				alert(error);
			});
		}
	}

	return (
		<form onSubmit={handleSubmit} style={style.form} >
			<div style={style.text.disclaimer} >
				You will recieve an confirmation email when you submit your application. If you don`t, please send your application to post@fuelfighter.no and inform about your issue.
			</div>
			<span style={style.input.label}>Firstname</span>
			<input
				type="text"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'firstname')}
				// placeholder="firstname"
				required
			/>
			<span style={style.input.label}>Lastname</span>
			<input
				type="text"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'lastname')}
				// placeholder="firstname"
				required
			/>
			<span style={style.input.label}>Email</span>
			<input
				type="email"
				style={style.input.text}
				onChange={(event) => handleInput(event, 'email')}
				// placeholder="email"
				required
			/>
			<span style={style.input.label}>About you and why you want to apply</span>
			<textarea
				rows={5}
				style={style.input.text}
				onChange={(event) => handleInput(event, 'description')}
				required
			/>
			<span style={style.input.label}>Select your desired position</span>
			{
				positions.map((position) =>
					<label
						style={style.input.check}
						key={position}
					>
						<input
							type="checkbox"
							style={style.input.checkbox}
							onChange={(e) => handleCheckbox(e, position)}
							name={position}
						/>
						{position}
					</label>
				)
			}
			<input
				type="submit"
				value="Submit application"
				style={style.input.submit}
			/>
		</form>
	);
}

export default function Join() {
	return (
		<>
			<Header floating />
			<PageBanner title="Join Us" image={bannerImage} />
			<Section>

				<IntroCard>
					As a cross-disciplinary project we need students from every field of study. We are usually a team of 45 students, and always make sure some of them are exchange students. We like to have a good mixture of people from every year of study, to get good group dynamic and a good work culture to make people want to continue over several years. By being a part of our team you get 7.5 credits you can use in you study plan.
				</IntroCard>

				<Title>Position description</Title>

				<PositionsContainer>
					<PositionCard
						position="Project Manager"
						description="As project manager you are the main responsible for DNV Fuel Fighter’s overall progress, and you will have the overall responsibility for ensuring the success for all phases of the team’s work, from initiation to closure. This means that you will be involved in every part of the organisation, and will have to work with both technical problems, marketing and general administration. As PM you are also our public face, and will have to talk to sponsors, organizers of the SEM-event, NTNU and many others. <br/> <br/>
						This position gives what we consider a rather unique experience in working with and managing a fairly large team and engineering project. We do not demand any previous experience in leadership, and encourage everyone interested to apply, but as the PM of a technical student organisation you should have some interest in both technical and administrative tasks. But most importantly we are looking for you who are organised, dedicated and keen to work hard to take both the car and team to the next level!"
					/>
					<PositionCard
						position="Assistant project manager"
						description="The assistant project manager(APM) works closely with the project manager(PM) to ensure that the administrative side of the project runs smoothly. The PM will have a lot to do, and you will help her/him with tasks that are ultimately their responsibility. Therefore, it is important to communicate well and work together. You will also work with the head of finance when dealing with budgeting, financing and matters of economy. In team 2022 the Assistant Project Manager will be HR responsible, meaning you will make sure the members are happy and handle possible HR situations that may arise. Some of the tasks you will have is arranging recruitment, plan employe interviews, have contact with sponsors etc. Since you will be working with the PM and share a lot of the tasks, you could be a part of deciding who is doing which tasks."
					/>
					<PositionCard
						position="Head of Finance"
						description="As head of Finance, you are responsible for the budget and our sponsors. You will be in contact with employees at NTNU as well as contact people from sponsors. The work consists of purchasing orders for the team, handling sponsor deals and making sure the project is keeping within its budget. One of the tasks is also working closely with the assistant project manager in trying to get new sponsorship deals, and renewing existing ones. "
					/>
					<PositionCard
						position="Technical leader"
						description="The technical leader’s most important task is to make sure that the car is ready in time for the competition. This means helping the team do their work and overcoming obstacles and making sure that the system is within the rules. You need to have a good general knowledge of each subsystem, but not necessarily every single detail. It also helps to have both experience within mechanics, electronics and software, but it is not necessary. You also have other tasks, such as reaching out to potential sponsors. "
					/>
				</PositionsContainer>
				<hr />
				<PositionsContainer>
					<PositionCard
						position="Group Leaders"
						description="As a group leader you are responsible for planning the work of your group, helping them with what they need but also work on your own subsystem. You will get a bigger influence on the development of the organisation than a normal member and can help us reach our goals. This is a unique opportunity to be a leader in practice, and you will learn a lot!"
					/>
					<PositionCard
						position="Mechanical Group Leader"
						description="For team 2022 the mechanical team will produce our next car. This involves resin infusion of a carbon fibre monocoque, as well as modifying and improving every other aspect of the car. Examples of tasks to work on is suspension, steering, brakes or gear system. You will experience every step in the production and designing process. From designing and modelling parts and systems in CAD programs such as Fusion 360, to simulations and FEM- analysis in Hypermesh. In addition to produce every part in the workshop and composite lab."
					/>
					<PositionCard
						position="Autonomous Group Leader"
						description="As a member in the feature team Autonomous you will gain insights in how to make a car self-driving. You will work with high tech equipment as 3D Lidar, stereo camera, localization gear, components for steering and breaking the car and much more! It’s also a good experience where you can develop you coding skills, by forming algorithms to solve a task. You will not only take part in one small part of the system, but you will work together with the rest of the team trying to achieve common goals, and to get to this point all of the members need to contribute in all of the systems shaping process. The system is young, and you can by this have a lot of influence on the design."
					/>
					<PositionCard
						position="Electrical Group Leader"
						description="As leader of the electrical team, you are responsible for making sure the electrical system is ready for the competition.  You will get insight in all the electronics needed to make an electric car, this includes everything from motors to the dashboard. Improving on last years design is important to improve the efficiency of the electrical system. This includes everything from hardware design to writing software. You will also be responsible for ordering everything the team needs for electrical system. It is a great experience as you can influence the whole electrical system, and you get to help the team members when they encounter problems with their subsystems. It can be challenging at times, but it is also a lot of fun. "
					/>
					<PositionCard
						position="Design Group Leader"
						description="As a member of the design team, you will inherit the concept we have been working on for the last year, developing it further, and eventually producing the car and completing in the 2022 Shell Eco Marathon. The design process involves physical and digital testing of aerodynamics, strength, ergonomics, and aesthetics. You will be drawing, building clay-models, and modelling in Fusion 360. You will follow the concept all the way from a CAD-file to a competitive concept car, cooperate with other skilled students from a variety of professions, and work as a team to overcome the challenges along the way. "
					/>
					<PositionCard
						position="Marketing Group Leader"
						description="As Marketing group leader you will be responsible for making the DNV Fuel Fighter team visible. There is a lot of different tasks in a marketing team, like SoMe, Event planning, graphical design and photo & video, and you will be the one with an overview of what everyone is doing and help out if needed. This gives you a unique opportunity to be a part of all of these roles and learn a lot. You are also the connection between the board and every marketing role, so you need to communicate well with both and learn how to find answers to questions the group might have. This is a job where you can come up with creative ideas and really think outside the box. "
					/>
					{/* <PositionCard 
						position="Mechanical" 
						description="The mechanical group this year will first of all complete and improve the current car. This includes: 
							<ul>
								<li>An efficient gear system</li>
								<li>Suspension</li>
								<li>Brake system</li>
								<li>Steering</li>
								<li>Carbon fiber rims</li>
								<li>Windows and doors</li>
							</ul>
							But they will also start developing the new car for SEM2022. They will help the design/R&D team set constraints for the new monocoque based on other mechanical parts and plan and train for the production process." 
					/>
					<PositionCard 
						position="Electrical" 
						description="The electrical team will design, produce and test printed circuit boards and all the other electronics in the car to make our car as efficient as possible. Some of the electrical systems we are working on are: 
							<ul>
								<li>Motor controller</li>
								<li>Telemetry and data monitoring</li>
								<li>Power distribution and battery management system</li>
								<li>Interface (steering wheel, screens, dashboard, lights etc.)</li>
								<li>Test bench</li>
							</ul>" 
					/>
					<PositionCard 
						position="Design/ R&D" 
						description="The design/R&D team will finish some final touches on the current car. This includes: 
							<ul>
								<li>Steering wheel</li>
								<li>Dashboard</li>
								<li>Foil</li>
							</ul>
							But the most important part will be to start designing and prototyping our new car. This will include: 
							<ul>
								<li>Sketching ideas</li>
								<li>Making models to 3D scan into CAD software</li>
								<li>3D modelling (CAD)</li>
								<li>Aerodynamics simulation</li>
								<li>Topology optimization</li>
								<li>Composite optimization</li>
							</ul>
							The plan for the new monocoque is to produce it the fall of 2021." 
						/>
					<PositionCard 
						position="Marketing" 
						description="Marketing is a very important group for us. It helps us get new and keep existing sponsors as well as giving us more attention among students at NTNU. Next to the efficiency competition, winning the Marketing Award in Shell Eco Marathon is one of our main goals.
							<br />
							Positions we have in marketing: 
							<ul>
								<li>Graphical designer</li>
								<li>Web development</li>
								<li>Pictures and editing</li>
								<li>Video editing (promo video, vlog etc.)</li>
								<li>Social Media</li>
								<li>Event planning (external and internal events)</li>
							</ul>
							Even though everyone has different responsibilities, it is a group effort. You will get experience with working with a lot of different stuff.  " 
					/>
					<PositionCard 
						position="Autonomous" 
						description="One of our goals this year is to compete in the Shell Eco Marathon Autonomous competition. To do that we need a good group of motivated students. There will be a steep learning curve, but you will get valuable experience and good friends. Fields you could work on in the autonomous group is path planning, simultaneous localization and mapping (SLAM) using a 360 LiDAR, control, ultrasonic sensors and more." 
					/>
					<PositionCard 
						position="Group Leader" 
						description="Do you want to be a group leader? As a group leader you are responsible for planning the work of your group, helping them with what they need but also work on your own subsystem. You will get a bigger influence on the development of the organisations than a normal member, and can help us reach our goals.  
							<br />
							Leader positions available: 
							<ul>
								<li>Mechanical Leader</li>
								<li>Design/R&D Leader</li>
								<li>Autonomous Leader</li>
							</ul>" 
					/> */}
				</PositionsContainer>

				<Title>Apply</Title>
				<JoinForm />

				{/* <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4CWazjpxWbrPAmqx5"><Button>Application form</Button></a> */}
			</Section>
			<Footer />
		</>
	)
}