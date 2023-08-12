export default function Header() {
  const textClass = "font-bold text-[15px] tracking-[1.5px]";
  return (
    <>
      <div className="circle-filled"></div>
      <header>
        <nav className="flex gap-4 pt-4 justify-end	items-center">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <p className={`${textClass} text-gri`}>DARK MODE</p>{" "}
          <p className={`${textClass} text-gri`}>|</p>
          <p className={`${textClass} text-gri`}>
            <span className={`${textClass} text-pembe`}>TÜRKÇE</span>
            'YE GEÇ
          </p>
        </nav>
      </header>
    </>
  );
}
