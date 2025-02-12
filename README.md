## Conclusion of Muniba e-shop marketplace :

On Day 1 of our eCommerce marketplace journey, we laid the foundation by understanding the essentials of eCommerce, Q-Commerce, and rental eCommerce. We explored the significance of building an online marketplace, the core functionalities required, and the benefits it offers in terms of scalability, convenience, and profitability.

For **Muniba e-Shop**, the goal is to provide affordable furniture and related products, addressing the challenge of accessibility and affordability in the market. The marketplace will feature products such as chairs, tables, sofas, vases, and crockery items.

To establish a structured foundation, we outlined a data schema defining key entities like **Products, Orders, Customers, Delivery Zones, Shipments, and Payments**, ensuring smooth marketplace operations. Relationships between these entities were mapped to facilitate efficient order processing, inventory management, and customer interactions.

This structured approach sets the stage for the next steps in developing a robust, scalable, and user-friendly eCommerce platform. 🚀


On Day 2 of the hackathon, we established the **technical foundation** for **Muniba e-Shop**, focusing on the essential system architecture and integrations required for a seamless eCommerce experience.

The **frontend**, built with **Next.js**, ensures a user-friendly and responsive shopping experience. Key pages include **Home, Login/Signup, Product Details, Cart, Checkout, and Order Confirmation**, with a 404 error page for missing routes. The UI incorporates **ShadCN-UI** components to enhance usability.

For the **backend**, we utilize **Sanity CMS** to manage products, orders, and customer data, structuring schemas to support efficient data retrieval and storage.

We also integrated **third-party APIs**, including **ShipEngine** for real-time shipment tracking and **Stripe** for secure payment processing, ensuring smooth order management.

The system architecture follows a clear workflow:
1. Users browse and add products to their cart.
2. Orders are recorded in **Sanity CMS**.
3. Shipments are tracked via third-party APIs.
4. Payments are securely processed using **Stripe**.
5. Customers receive real-time order updates.
6. Use clerk authentication for user signup/sign in specially for cart page.

This structured approach lays a solid foundation for **Muniba e-Shop**, ensuring scalability, reliability, and an enhanced shopping experience. 🚀

On **Day 3** of the **Muniba e-Shop** development, we focused on **API integration and data migration** to ensure seamless data flow between the provided API and **Sanity CMS**.

### Key Accomplishments:
- **API Testing & Validation**: The given API (`https://hackathon-apis.vercel.app/api/products`) was tested using Thunderstorm.
- **Schema Adjustments**: Modified the existing **Sanity CMS schema** to match API data, including:
  - Replacing **id** with **slug** for better URL handling.
  - Adding **price_id** for Stripe payment integration.
- **Data Import & Migration**:
  - Implemented an **importData.mjs** script to fetch and store data in Sanity.
  - Created a **deleteProduct.mjs** script to clear outdated data when necessary.
  - Used **Next.js with Sanity** to successfully migrate and display data.

By completing this integration, **Muniba e-Shop** now has a structured, automated pipeline for managing product data efficiently, paving the way for a **fully functional eCommerce experience**. 🚀


On **Day 4** of **Muniba e-Shop**, we successfully developed **dynamic frontend components** powered by **Sanity CMS** to enhance the user experience.

### Key Achievements:
- **Product Listing Component**: Implemented a dynamic product list with a filter for the **New Ceramic** tag.
- **Product Detail Page**: Developed a dynamic page that fetches product details from **Sanity CMS** based on the **slug** field.
- **Category Component**: Integrated a dropdown filter to categorize products, including **Ceramics, Chairs, Cutlery, Tables, and Plant Pots**.
- **Add to Cart & Cart Page**: 
  - Created a **ShoppingCartModal** using **ShadCN UI**, which displays when adding products to the cart.
  - Added functionality to **increase/decrease product quantity** and **calculate total/subtotal price**.
- **Pagination**: Enabled navigation between previous and next products in the **product detail page**.
- **Checkout Integration**: Implemented **Stripe checkout** for secure transactions.

### Challenges Faced:
1. **Category Filtering**: Initially filtered by **slug**, later corrected to **name-based filtering**.
2. **Pagination in Dynamic Routes**: Faced difficulties in implementing pagination but successfully integrated it into the product detail page.

By overcoming these challenges, we have built a **fully functional, dynamic frontend** that efficiently renders content from **Sanity CMS**, bringing us closer to a complete eCommerce experience. 🚀


On **Day 5** of **Muniba e-Shop**, we focused on **testing, error handling, and backend integration refinement** to ensure a stable and high-performing eCommerce platform.

### Key Achievements:
- **Functional Testing**:
  - Verified the functionality of key components: **Search, Product Listing, Product Detail, Add to Cart, Pagination, Checkout, and Category Filters**.
- **React Testing Library (RTL)**:
  - Tested the **Home Page** and **Product Listing Page** for UI consistency and functionality.
- **API Testing**:
  - Used **Postman** and **ThunderClient** to validate API responses and error handling.
- **Performance Testing**:
  - Conducted **Lighthouse performance analysis** to optimize load times and responsiveness.
- **Cross-Browser & Device Compatibility**:
  - Tested **Microsoft Edge** and **Google Chrome** for consistent UI and functionality across browsers.
- **Error Handling**:
  - Implemented **fallback UI** to gracefully handle API errors.
- **Test Cases Execution**:
  - Validated key scenarios, such as:
    - **Product listing & category filters**
    - **API error handling**
    - **Cart functionality**
    - **Mobile responsiveness**
    - **Pagination workflow**

By completing these **testing and backend refinements**, **Muniba e-Shop** now operates with enhanced **stability, responsiveness, and error resilience**, ensuring a smooth shopping experience for users. 🚀


On **Day 6** of **Muniba e-Shop**, we prepared the project for **deployment** and set up a **staging environment** to test the application before going live.

### Key Achievements:
- **Hosting Platform Setup**:
  - Selected **Vercel** for quick and efficient deployment.
  - Connected the **GitHub repository** and configured build settings.
- **Environment Configuration**:
  - Created a **.env file** to manage API keys and sensitive variables securely.
- **Staging Deployment**:
  - Successfully deployed the application to a **staging environment**.
  - Verified basic functionality before production deployment.
- **Staging Environment Testing**:
  - Conducted **functional, performance, and security testing** to ensure stability.
  - Used **Lighthouse and GTmetrix** for **performance analysis**.
  - Performed **cross-browser and mobile responsiveness tests**.
  - Documented test cases in a structured **CSV report**.
- **Documentation & Finalization**:
  - Created a **README.md** summarizing project setup and testing results.
  - Organized project files for a structured and maintainable codebase.

By completing **deployment preparation and staging setup**, **Muniba e-Shop** is now **ready for a full production launch**, ensuring a seamless and high-performance shopping experience for users. 🚀

- finally on day 7 made admin-panel for this marketplace where admin manage orders!
