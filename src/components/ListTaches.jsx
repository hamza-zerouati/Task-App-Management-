import { useState, useEffect } from "react";

const ListTaches = () => {
  const [tache, setTache] = useState("");

  const saved = localStorage.getItem("ListTaches");
  const [listTaches, setListTaches] = useState(
    saved ? JSON.parse(localStorage.getItem("ListTaches")) : [],
  );

  const [editTache, setEditTache] = useState(null);
  const [nvTache, setNvTache] = useState("");
  const addTache = () => {
    if (tache != "") {
      setListTaches([...listTaches, tache]);
      console.log(listTaches);
      setTache("");
    }
  };

  const deleteTache = (index) => {
    setListTaches(
      listTaches.filter((li, position) => {
        return position != index;
      }),
    );
    setEditTache(null); // en  cas ou une tache en edition (clique sur edit) et j'ai voudrais de supprimer cette tache
  }; // donc il faut apres la suppression d'une tache eviter que editTache pointer vers la tache precedante

  const deleteALL = () => {
    const confirm = window.confirm("are yout want to delete all taches");
    if (confirm) {
      setListTaches([]);
    }
  };

  const tacheEdit = (position) => {
    setEditTache(position);
  };

  const saveNvTache = (index) => {
     setListTaches( listTaches.map((li,position) =>{
       if (position==index) {
        return nvTache
       }
      return li 
     }) )
   
     setEditTache(null);
     setNvTache("")
  };

  useEffect(() => {
    localStorage.setItem("ListTaches", JSON.stringify(listTaches));
  }, [listTaches]);

  return (
    <div>
      <div className="flex gap-2 w-full max-w-6xl px-5">
        <input
          type="text"
          value={tache}
          onChange={(e) => {
            setTache(e.target.value);
          }}
          className=" w-full rounded-lg border border-blue-400 outline-none text-xl px-4 transition focus:border-blue-700 focus:ring-2 focus:ring-blue-300  "
        />

        <button
          onClick={addTache}
          className=" rounded-lg border border-blue-400  transition hover:bg-blue-600 hover:text-white active:scale-110"
        >
          Ajouter votre tache
        </button>
      </div>

      <div className="p-8">
        <h1 className="text-5xl text-blue-800 text-left italic  ">
          Mes Taches
        </h1>

        <ul className=" border border-blue-400 min-h-60 mt-8 py-4 px-10">
          {listTaches.map((tache, index) => {
            return (
              <li key={index}>
                {editTache == index ? (
                  <>
                    <input
                      type="text"
                      value={nvTache}
                      onChange={(e) => {
                        setNvTache(e.target.value);
                      }}
                      className=" rounded-lg border border-blue-300 outline-none px-4 py-1 transition focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
                    />
                    <button
                      onClick={()=>saveNvTache(index)}
                      className=" rounded-lg border border-blue-400 ml-5 py-1 px-2 transition hover:bg-blue-600 hover:text-teal-50 active:scale-90"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  tache
                )}

                <button
                  onClick={() => {
                    deleteTache(index);
                  }}
                  className=" rounded-lg border border-blue-400 ml-5 py-1 px-2 transition hover:bg-red-600 hover:text-teal-50 active:scale-90"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    tacheEdit(index);
                  }}
                  className=" rounded-lg border border-blue-400 ml-5 py-1 px-2 transition hover:bg-blue-600 hover:text-teal-50 active:scale-90"
                >
                  edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-end p-8">
        <button
          onClick={deleteALL}
          className="rounded-lg border border-blue-500 p-4 transition hover:bg-red-600 hover:text-teal-50 active:scale-90"
        >
          Delete ALL
        </button>
      </div>
    </div>
  );
};

export default ListTaches;
