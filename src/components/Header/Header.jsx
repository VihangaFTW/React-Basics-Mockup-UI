import image from '../../assets/react-core-concepts.png';

export default function Header() {
  const descriptions = ["Crucial", "Fundamental", "Core"];

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[getRandomInt(descriptions.length - 1)]} React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
