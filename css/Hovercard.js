// when hover the card the hovered card will become bright

.clogos img {
    opacity: 0.2; /* Set the default opacity for a dim effect */
    transition: opacity 0.3s; /* Add transition for a smooth effect */
    padding: 50px;
  }
  
  .clogos img:hover {
    opacity: 1; /* Increase opacity on hover for a bright effect */
  }

// another type

.item { 
  transition: .3s;
}

.container:hover:not(:hover) { 
  opacity:.4;
}
