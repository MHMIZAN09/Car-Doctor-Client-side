import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)
    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        console.log(name, email, date, price);

        const order = {
            customerName: name,
            email,
            date,
            price,
            img,
            service: title,
            service_id: _id
        }
        console.log(order)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h2>Book service :{title}</h2>
            <form className="card-body" onSubmit={handleOrder}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user ? user.displayName : ''} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user ? user.email : ''} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" required />
                    </div>
                </div>

                <div className="mt-6 form-control">
                    {/* <button >Login</button> */}
                    <input type="submit" value="Order Now" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;