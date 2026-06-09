import './subcont.css';


export default function Image({ url, alt = "img" }) {
  return (
    /* Usamos tu clase 'subcont' y quitamos el borde con la clase 'border-0' de Bootstrap */
    <div className="subcont border-0 p-0 overflow-hidden w-100 d-flex justify-content-center">
      <img 
        src={url} 
        alt={alt} 
        /* 'img-fluid' es el equivalente exacto en Bootstrap a max-width: 100% y height: auto.
          'w-100' asegura que intente ocupar todo el ancho disponible si así lo deseas.
        */
        className="img-fluid w-100" 
      />
    </div>
  );
}