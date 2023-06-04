import Navbar from "../components/Navbar";

export default function Multumim() {
  return (
    <div className="font-Sans h-screen">
      <Navbar/>
      <div className="container text-center mt-64">
        <h1 className="font-semibold mb-10 text-2xl">Multumim pentru transmiterea formularului!</h1> 
        <p className="text-lg">Formularul tau a fost transmis cu succes.</p>
      </div>
    </div>
  );
}