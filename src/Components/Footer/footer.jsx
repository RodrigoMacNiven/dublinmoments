import React from 'react';
import './footer.css';

function Footer() {
  return (
    <section id="footer">
      <div>
        <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="#"><i class="fa-brands fa-whatsapp fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i class="fa-brands fa-tiktok fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fa fa-envelope fa-2x"></i></a></li>
        </ul>
      </div>
      <p className='text-center'>Desenvolvido por Rodrigo Machado - 2024</p>
    </section>
  );
}

export default Footer;
