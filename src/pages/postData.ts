export default function postData() {
    if (typeof window === "undefined") return;

        function alertPopup(message:string) {
            if (message) {
                document.getElementById('alert-cart')!.innerHTML = message;
                document.getElementById('alert-cart')!.classList.add('active');
                setTimeout(function () {
                    document.getElementById('alert-cart')!.classList.remove('active');
                }, 4000);
            }
        }

        const inputs = document.querySelectorAll('#theForm input') as NodeListOf<HTMLInputElement>
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].reportValidity()) return
        }

        if (!document.querySelector('input[name="radio-payment"]:checked')) {
            alertPopup('Kérlek válassz a fizetési módok közül!');
            return;
        }
        /*if (!document.querySelector('input[name="radio-shipping"]:checked')) {
            alertPopup('Kérlek válassz a szállítási módok közül!');
            return;
        }
        if (document.querySelector('input[name="radio-shipping"]:checked').value === 'FOXPOST' && document.getElementById('foxpostData').value === '') {
            alertPopup('Kérlek válassz ki egy automatát a listából!');
            return;
        }*/

        let product_ids:number
        document.querySelectorAll('.qty button').forEach(button => {
            if (button.classList.contains('active')) product_ids = Number(button.id);
        })

        /*if (document.querySelector('input[name="radio-shipping"]:checked').value === 'Hazhozszallitas') {
            product_ids.push(319);
            product_qtys.push(1);
        } else if (document.querySelector('input[name="radio-shipping"]:checked').value === 'GLS') {
            product_ids.push(242);
            product_qtys.push(1);
        } else if (document.querySelector('input[name="radio-shipping"]:checked').value === 'FOXPOST') {
            product_ids.push(130);
            product_qtys.push(1);
        }*/

        /*if (document.querySelector('input[name="radio-payment"]:checked').value === '1') {
            product_ids.push(244);
            product_qtys.push(1);
        }*/


        async function sendData() {
            const adat = {
                name: (document.getElementById("name") as HTMLInputElement)?.value || "",
                email: (document.getElementById("email") as HTMLInputElement)?.value || "",
                phone: (document.getElementById("phone") as HTMLInputElement)?.value || "",
                billing_zip: (document.getElementById("billing_zip") as HTMLInputElement)?.value || "",
                billing_city: (document.getElementById("billing_city") as HTMLInputElement)?.value || "",
                billing_address: (document.getElementById("billing_address") as HTMLInputElement)?.value || "",
                shipping_zip: (document.getElementById("shipping_zip") as HTMLInputElement)?.value || "",
                shipping_city: (document.getElementById("shipping_city") as HTMLInputElement)?.value || "",
                shipping_address: (document.getElementById("shipping_address") as HTMLInputElement)?.value || "",
                payment_method_id: (document.querySelector('input[name="radio-payment"]:checked') as HTMLInputElement)?.value || "",
                product_id: [product_ids],
                product_qty: [1],
                comment: (document.getElementById("message") as HTMLTextAreaElement)?.value || "",
                data: {
                    foxpost_automata: (document.getElementById("foxpostData") as HTMLInputElement)?.value || "",
                },
                // success_return_url: "https://rachelcare.hu/koszonjuk.html"
            };


            try {
                const response = await fetch('https://epikforge.space/api/site/14e7c093-49bc-46a6-ae5e-9ed6e76b4aac/order/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(adat)
                });

                if (!response.ok) {
                    throw new Error('Hálózati hiba történt: ' + response.status);
                }

                const data = await response.json();
                console.log('Sikeres válasz:', data);

                /*fbq('track', 'Purchase', {
                    value: total,
                    currency: 'HUF',
                });*/

                if (data.redirect && typeof data.redirect === 'string') {
                    window.location = data.redirect;
                }
                //Sikeres rendelés
                if(data.success){
                    document.getElementById('orderBTN')!.remove();
                    setTimeout(()=>document.getElementById('success-order')!.classList.add("active"), 500)
                }

            } catch (error) {
                if (error instanceof Error) {
                    console.error('Hiba:', error.message);
                } else {
                    console.error('Ismeretlen hiba:', error);
                }
            }

        }

        sendData();
}