import React from 'react'


const categories = [
    { id: 1, name: 'Mac' },
    { id: 2, name: 'Iphone' },
    { id: 3, name: 'Watch' }
  ];



const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Apple Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map( category => (
                            <li class="nav-item">
                                <a class="nav-link active" href="#">{category.name}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;