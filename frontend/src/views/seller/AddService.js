import React from 'react';
import {useState, useEffect }  from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode';

import Header from '../../components/Header'
const swal = require('sweetalert2')

const baseUrl = 'http://127.0.0.1:8000/api';

function AddService() {
    const [category, setCategory] = useState([])
    const [service, setService] = useState({
        title:"",
        image:"",
        description:"",
        category:"",
        price:"",
        tags:"",
        features:"",
        address:"",
        longitude:"",
        latitude:"",
    })
    const token = localStorage.getItem('authTokens');
    const decoded = jwtDecode(token);
    const user_id = decoded.user_id;
    console.log(user_id);
    // Fetch All Cateogories
    try {
        useEffect(() => {
            axios.get(baseUrl + '/category/').then((res) => {
                setCategory(res.data)
            })
        }, [])
    } catch (error) {
        console.log(error);
    }

    // Handle Input Data Change
    const handleChange = (event) => {
        setService({
            ...service,
            [event.target.name]:event.target.value
        })
    }

    const handleFileChange = (event) => {
        setService({
            ...service,
            [event.target.name]:event.target.files[0]
        })
    }

    // Submit the service to the api endpoint via axios
    const formSubmit = () => {
        const formData = new FormData()

        formData.append("user", 1)
        formData.append("category", service.category)
        formData.append("title", service.title)
        formData.append("image", service.image)
        formData.append("description", service.description)
        formData.append("tags", service.tags)
        formData.append("features", service.features)
        formData.append("address", service.address)
        formData.append("tags", service.tags)
        formData.append("price", service.price)
        formData.append("longitude", service.longitude)
        formData.append("latitude", service.latitude)

        console.log(service);

        try {
			axios.post(baseUrl + '/service/', formData, {
				headers: {
					'content-type':'multipart/form-data'
				}
			}).then((res) => {
                console.log(res.data);
                swal.fire({
                    title: "Service Added Successfully.",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'bottom-right',
                    timerPRogressBase: true,
                    showConfirmButton: false,
                })
			})
		} catch (error) {
			
		}
    }


    return (
        <div>
            <Header />  
            <div class="breadcrumb-bar">
                    <div class="container">
                        <div class="row align-items-center text-center">
                            <div class="col-md-12 col-12">
                                <h2 class="breadcrumb-title">Add Service</h2>
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Add Service</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="dashboard-content">
                <div class="container">
                    
                    <div class="profile-content">
                        <div class="messages-form">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="col-form-label">Service Title <span>*</span></label>
                                        <input type="text" value={service.title} onChange={handleChange} name='title' class="form-control pass-input" placeholder="Title" />
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Listing Description <span>*</span></label>
                                        <textarea rows="6" value={service.description} onChange={handleChange} name='description' class="form-control listingdescription" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label label-heading">Category </label>
                                        <div class="row category-listing">
                                            <div class="col-lg-">
                                                <select name="category" onChange={handleChange} id="" className='form-select'>
                                                    {category.map((category, incex) => {return <option  value={category.id}>{category.title}</option>
                                                } 
                                                    )}
                                                    
                                                </select>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div class="form-group formlast-input mt-2">
                                        <label class="col-form-label label-heading">Tags</label>
                                        <textarea rows="2" value={service.tags} onChange={handleChange} name='tags' class="form-control tagline" placeholder="Seperate tags using commas"></textarea>
                                    </div>
                                    <div class="form-group formlast-input mt-2">
                                        <label class="col-form-label label-heading">Features</label>
                                        <textarea value={service.features} onChange={handleChange} name='features' rows="2" class="form-control tagline" placeholder=""></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4>Basic information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="col-form-label">Price Range</label>
                                        <input value={service.price} onChange={handleChange} name='price' type="number" class="form-control pass-input" placeholder="$$$" />
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-header">
                                    <h4>Location information</h4>
                                </div>
                                <div class="card-body">
                                    
                                    <div class="form-group">
                                        <label class="col-form-label">Map Address</label>
                                        <input value={service.address} onChange={handleChange} name='address' placeholder='Address' type="text" class="form-control" />
                                    </div>
                                    <div class="listing-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6461688381!2d-80.26548188573862!3d26.045130803169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a862f9831459%3A0xafcb9384c02e8b75!2s8697%20Stirling%20Rd%2C%20Cooper%20City%2C%20FL%2033328%2C%20USA!5e0!3m2!1sen!2sin!4v1671519522101!5m2!1sen!2sin"
                                            width="100"
                                            height="430"
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group formlast-input lat-input">
                                                <input value={service.longitude} onChange={handleChange} name='longitude' type="text" class="form-control"  />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group formlast-input">
                                                <input value={service.latitude} onChange={handleChange} name='latitude' type="text" class="form-control"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="card">
                                <div class="card-header">
                                    <h4>Contact Information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="col-form-label">Email </label>
                                        <input type="text" class="form-control pass-input" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Website </label>
                                        <input type="text" class="form-control pass-input" placeholder="" />
                                    </div>
                                    <div class="form-group formlast-input">
                                        <label class="col-form-label">Phone </label>
                                        <input type="text" class="form-control pass-input" placeholder="" />
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="card">
                                <div class="card-header">
                                    <h4>Social Information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row social-info">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Facebook</label>
                                                <div class="pass-group group-img">
                                                    <span class="lock-icon"><i class="fab fa-facebook-f"></i></span>
                                                    <input type="text" class="form-control" value="http://facebook.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <label class="col-form-label">Twitter</label>
                                                <div class="pass-group group-img">
                                                    <span class="lock-icon"><i class="fab fa-twitter"></i></span>
                                                    <input type="text" class="form-control" value="http://twitter.com" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row social-info">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group formlast-input lat-input">
                                                <label class="col-form-label">Google+</label>
                                                <div class="pass-group group-img">
                                                    <span class="lock-icon"><i class="fa-brands fa-google-plus-g"></i></span>
                                                    <input type="text" class="form-control" value="http://google.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group formlast-input">
                                                <label class="col-form-label">Instagram</label>
                                                <div class="pass-group group-img">
                                                    <span class="lock-icon"><i class="fab fa-instagram"></i></span>
                                                    <input type="text" class="form-control" value="http://instagram.com" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div class="card media-section">
                                <div class="card-header">
                                    <h4>Media Information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 featured-img1">
                                            <h6 class="media-title">Featured Image</h6>
                                            <div class="media-image">
                                                <img src={service.image}  alt="" />
                                            </div>
                                            <div class="settings-upload-btn">
                                                <input onChange={handleFileChange} name="image" type="file" accept="image/*" class="hide-input image-upload" id="file" />
                                                <label for="file" class="file-upload">Upload File</label>
                                            </div>
                                        </div>
                                        {/* <div class="col-lg-6 col-md-6 featured-img2">
                                            <h6 class="Featured image">Logo</h6>
                                            <div class="media-image">
                                                <img src="assets/img/mediaimg-1.jpg" alt="" />
                                            </div>
                                            <div class="settings-upload-btn">
                                                <input type="file" accept="image/*" name="image" class="hide-input image-upload" id="file1" />
                                                <label for="file1" class="file-upload">Upload File</label>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* <div class="gallery-media">
                                        <h6 class="media-title">Gallery</h6>
                                        <div class="galleryimg-upload">
                                            <div class="gallery-upload">
                                                <img src="assets/img/gallery/gallerymedia-1.jpg" class="img-fluid" alt="" />
                                                <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>
                                            </div>
                                            <div class="gallery-upload">
                                                <img src="assets/img/gallery/gallerymedia-2.jpg" class="img-fluid" alt="" />
                                                <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>
                                            </div>
                                            <div class="gallery-upload">
                                                <img src="assets/img/gallery/gallerymedia-3.jpg" class="img-fluid" alt="" />
                                                <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>
                                            </div>
                                            <div class="gallery-upload">
                                                <img src="assets/img/gallery/gallerymedia-4.jpg" class="img-fluid" alt="" />
                                                <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>
                                            </div>
                                            <div class="gallery-upload">
                                                <img src="assets/img/gallery/gallerymedia-5.jpg" class="img-fluid" alt="" />
                                                <a href="javascript:void(0)" class="profile-img-del"><i class="feather-trash-2"></i></a>
                                            </div>
                                        </div>
                                        <div class="settings-upload-btn">
                                            <input type="file" accept="image/*" name="image" class="hide-input image-upload" id="file2" />
                                            <label for="file2" class="file-upload">Upload File</label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <button onClick={formSubmit} class="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService