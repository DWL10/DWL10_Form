import './subcont.css';

export default function Title({ text, h = "h1", noBorder = false }){
    const Tag = h;
    return (
    <div className="subcont" style={{placeContent:'center',border: noBorder ? 'none' : 0, borderBottom: noBorder ? 'none' : '1px solid #171728'}}>
      <Tag>{text}</Tag>
    </div>
  );
}