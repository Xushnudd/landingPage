import Card from "./Card"
import TabCard from "./TabCard"

let data = [
    {
        "img": {
            "link": "/resourceretail1.png",
            "alt": "resourceretail card1"
        },
        "head": "What is a mobile POS system?",
        "p": "Learn how to check out customers anywhere with a portable POS system.",
        "link": {
            "url": "/",
            "name": "Learn about mobile POS systems"
        }
    },
    {
        "img": {
            "link": "/resourceretail2.png",
            "alt": "resourceretail card2"
        },
        "head": "What is point of sale software?",
        "p": "Read about point of sale software and how it supports retail businesses.",
        "link": {
            "url": "/",
            "name": "Learn about POS software"
        }
    },
    {
        "img": {
            "link": "/resourceretail3.png",
            "alt": "resourceretail card3"
        },
        "head": "How to pick a POS system",
        "p": "Find out what to look for when comparing retail POS systems.",
        "link": {
            "url": "/",
            "name": "Learn about picking a POS"
        }
    }
]

let tabData = [
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What are the benefits of using a POS system?",
        "caption": `There are many benefits of using a POS system, most notably making it easier to run your retail business. Using a POS system significantly simplifies daily business tasks, from checking out customers to performing inventory counts. When you have a POS system, you're tracking payments, inventory, and customers with every sale—and you don't have to spend time reconciling all that data at the end of the day.

The benefits of a POS system start with the transaction, where you can use integrated hardware and software to accept payments from credit cards, debit cards, and digital wallets. When payment is taken, inventory levels are automatically updated behind the scenes and customer data is created and saved. You'll have a more accurate picture of inventory across your business as well as a complete customer list everywhere you sell—with no extra work on your end.

Once you have this data, you can use it to improve efficiency and even increase revenue. Accurate inventory data means it's easy to see when it's time to re-order. A good POS system as well will share insights like when something's about to run out of stock or what products need to move and should be put on sale. Customer data is also really useful. When you have accurate customer information you can track their purchases and make notes about their preferences. This means your staff is in a better position to offer good customer service. You can also use that data in digital marketing campaigns like email marketing or social media marketing to find new customers and bring existing customers back.

In short, POS systems make it easier to run your business. A good POS system, like Shopify POS, will make the hard parts simple, so you can focus on the parts you love.`
    },
    {
        "title": "How does the Shopify POS system work?",
        "caption": `A POS system is the hardware and software retailers use to simplify retail operations. The POS system is comprised of hardware, to take payments from cards and digital wallets, and software, to track and organize your retail store's information. Today, most POS software can be downloaded to any smartphone or tablet, though in the past it was typical to see POS software on desktop computers at checkout. Depending on your needs you may also add accessories to your POS system, such as a cash drawer, barcode scanner, and receipt printer.

The POS system works together to make running a business easier. It is the system through which retailers can transact with customers; it's also the system that updates inventory levels behind the scenes with every sale. This means retailers have a more accurate view of their business, without having to manually track purchases and reconcile sales at the end of the day.

Here's how you can use Shopify's POS system in your store:
Scan the items to add them to the customer's cart.
The POS calculates the order total, including sales tax.
Select Checkout and Shopify's integrated retail POS hardware is instantly ready to take payment.
The customer pays using their preferred payment method. Shopify POS accepts all major credit cards, debit cards, and digital wallets.
The POS generates a receipt which you can print or email to the customer.
The POS captures order and customer data and automatically updates your inventory levels.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
    {
        "title": "What is a POS (point of sale)?",
        "caption": `A point of sale, or POS, is a system used to process transactions and accept payments in person.

With Shopify POS, retail businesses get all the tools they need to manage daily operations, accept payments anywhere, and build relationships to create customer loyalty. But the benefits of Shopify go beyond your retail store. With a powerful ecommerce solution also included, Shopify unifies in-store and online sales to bridge the gaps between your website, social media, and POS system. This allows you to sync inventory everywhere you sell and offer seamless shopping options for customers like local delivery, ship to customer, in-store pickup, and email carts.`
    },
]

const ResourceRetail = () => (
    <div className="w-full p-10 bg-neutral-900">
        <div className="w-full flex flex-col items-center gap-10">
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-white text-5xl">Resources for retailers</h2>
                <p className="text-gray-400 text-xl">Access free guides, discover retail trends, and learn how brands like you use<br />Shopify POS.</p>
            </div>
            <div className="max-w-max flex gap-3 flex-wrap">
                {data.map((el, i) => (
                    <Card key={i} img={el.img["link"]} img_alt={el.img["alt"]} head={el.head} p={el.p} link={el.link} link_name={el.link["name"]} />
                ))}
            </div>
        </div>
        <div>
            <h2 className="my-20 text-white text-5xl">Frequently asked questions</h2>
            <div>{tabData.map((el, i) => (<TabCard title={el.title} caption={el.caption} />))}</div>
        </div>
    </div>
)

export default ResourceRetail