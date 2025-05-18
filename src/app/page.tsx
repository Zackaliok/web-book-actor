export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">Hello World</h2>
          <p>
            This website is under construction. Please check back later for
            updates.
          </p>
          <div className="card-actions justify-end">
            <a
              href={'https://gitlab.com/zackaliok.contact/book-julian-dve'}
              target="_blank"
            >
              <button className="btn btn-primary">Check Development</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
