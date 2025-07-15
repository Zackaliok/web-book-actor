export default function PicturesTab() {
  // On simule une liste de données pour vos images.
  // Dans une vraie application, ces données viendraient d'une API ou d'une base de données.
  const picturesData = [
    {
      id: 1,
      nom: "Forêt d'automne",
      emplacement: '/images/paysages/foret.jpg',
      url: '/public/uploads/IMG20240613165606.jpg',
    },
    {
      id: 2,
      nom: 'Plage ensoleillée',
      emplacement: '/images/vacances/plage.jpg',
      url: 'uploads/IMG20240613165606.jpg',
    },
    {
      id: 3,
      nom: 'Montagnes enneigées',
      emplacement: '/images/paysages/montagne.jpg',
      url: 'uploads/IMG20240613165606.jpg',
    },
    {
      id: 4,
      nom: 'Ciel étoilé',
      emplacement: '/images/astro/ciel.jpg',
      url: 'uploads/IMG20240613165606.jpg',
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* En-tête du tableau mis à jour */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image & Nom</th>
            <th>Emplacement</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* On boucle sur les données pour créer une ligne pour chaque image */}
          {picturesData.map((image) => (
            <tr key={image.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-16 w-16">
                      <img src={image.url} alt={image.nom} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{image.nom}</div>
                  </div>
                </div>
              </td>
              <td>
                {image.emplacement}
                <br />
                <span className="badge badge-ghost badge-sm">Fichier JPG</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">détails</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* Pied de page du tableau mis à jour */}
        <tfoot>
          <tr>
            <th></th>
            <th>Image & Nom</th>
            <th>Emplacement</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
