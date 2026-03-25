import Header from "./components/Header";
import Course from "./components/Course";

function App() {
  return (
    <>
      <Course
        title="Curso de TypeScript"
        description="Aprende React dede cero"
      />
      <Course
        title="Curso de TypeScript"
        description="Aprende TypeScript desde cero"
      />

      <Course
        title="Curso de TypeScript"
        description="Aprende Angular desde cero"
      />
      <Course
        title="Curso de TypeScript"
        description="Aprende Vue.js desde cero"
      />
    </>
  );
}

export default App;
