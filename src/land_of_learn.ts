/* array & tuple (can't edit data) */
const hobbies: ReadonlyArray<string> = ["Reput", "Ncep"]

const person: readonly[string, number] = ["Reput", 99]

/* union (custum date type ajust our selected) */
let sample: boolean | string | number[] = "Reput"

sample = true
sample = [99]

/* ========================= */
/* ==== F U N C T I O N ==== */
/* ========================= */

/* union */
function activities(act: boolean | string | number) {
    if (typeof act === "string") {
        return act.toLowerCase()
    } else if (typeof act === "number") {
        return act * 100
    } else {
        return !act
    }
}

activities("Ncep")
activities(99)
activities(false)

/* alias (strongly type and property) */
type Category = {
    id: number,
    name: string
}

type Product = {
    id: number,
    name: string,
    price: number,
    category: Category
}

const kategori: Category = {
    id: 7,
    name: "Phone"
}

const produk: Product = {
    id: 9,
    name: "Vivo V29 Series",
    price: 7000000,
    category: kategori
}