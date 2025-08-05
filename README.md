# 🛒 Shopping List App

A modern, professional shopping list application built with Node.js, Express, MongoDB, and EJS templating engine.

## ✨ Features

- **Modern UI Design**: Professional gradient design with responsive layout
- **CRUD Operations**: Create, Read, Update, and Delete shopping items
- **Category Filtering**: Filter products by category (fruit, vegetable, dairy)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **MongoDB Integration**: Persistent data storage with MongoDB
- **Clean Architecture**: Well-organized code structure

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine
- **Styling**: Custom CSS with modern design principles
- **Method Override**: For PUT/DELETE requests

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ridhii12/Shopping_list.git
   cd mongoose_express
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your local machine (default port: 27017)

4. **Run the application**

   ```bash
   node index.js
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
mongoose_express/
├── models/
│   └── product.js          # Product model schema
├── views/
│   └── products/
│       ├── index.ejs       # Product listing page
│       ├── show.ejs        # Product detail page
│       ├── new.ejs         # Add new product form
│       └── edit.ejs        # Edit product form
├── index.js                # Main server file
├── seeds.js                # Database seeding script
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## 🎯 Usage

### Adding Products

1. Click "Add New Product" button
2. Fill in the product name, price, and select a category
3. Click "Add Product" to save

### Viewing Products

- View all products on the main page
- Click on any product to see detailed information
- Use category filtering to view specific product types

### Editing Products

1. Click on a product to view its details
2. Click "Edit Product" button
3. Modify the information and click "Update Product"

### Deleting Products

1. Navigate to the product detail page
2. Click "Delete Product" button
3. Confirm the deletion

## 🎨 Design Features

- **Modern Gradient Background**: Purple-blue gradient theme
- **Card-based Layout**: Clean, organized product display
- **Hover Effects**: Smooth animations and transitions
- **Responsive Design**: Optimized for all screen sizes
- **Professional Typography**: Clean, readable fonts
- **Accessible Design**: Proper contrast and focus states

## 🔧 Configuration

The application uses the following default settings:

- **Port**: 3000
- **Database**: MongoDB on localhost:27017
- **Database Name**: farmStand

## 📝 API Endpoints

- `GET /products` - Display all products
- `GET /products?category=<category>` - Filter products by category
- `GET /products/new` - Show add product form
- `POST /products` - Create new product
- `GET /products/:id` - Show product details
- `GET /products/:id/edit` - Show edit product form
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
