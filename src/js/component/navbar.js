import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand">
					<img
						src="https://i.pinimg.com/564x/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.jpg"
						alt="Logo"
						width="120"
						height="120"
						className="d-inline-block align-text-top"
					/>
				</a>
				<ul class="nav">
					<li class="nav-item dropdown">
						<a
							class="nav-link bg-primary rounded dropdown-toggle"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							style={{ color: "white" }}
						>
							Favoritos <span class="badge">{store.favoritos.length}</span>
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							{store.favoritos.map((favorito) => (
								<li class="d-flex align-items-center">
									<a class="dropdown-item text-center">{favorito}</a>
									<button
										type="button"
										class="btn btn-outline-danger btn-sm ms-2"
										onClick={() => actions.handleFavoriteClick(favorito)}
									>
										<i class="fas fa-trash"></i>
									</button>
								</li>
							))}
						</ul>
					</li>
				</ul>

				<form className="d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Buscar</button>
				</form>
			</div>
		</nav>
	);
};
