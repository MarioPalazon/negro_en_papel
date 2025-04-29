

export const GaleriaView = () => {
  return (
    <div>

      <section className='w-full flex flex-col items-center overflow-x-hidden'>
        <div className='w-[80%] md:w-[60%] items-center mt-11'>
          <h1 className='text-2xl font-light md:text-3xl mb-6'>Mi Galeria</h1>
          <p className='font-light md:text-base'>Estos son algunos de los retratos realizados. Si quieres ver más trabajos visita mi Instagram</p>
        </div>
        <article className='w-[80%] md:w-[60%] flex justify-between items-center my-15'>
          <div className='w-[30%] flex flex-col gap-4 justify-between'>
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria1.jpeg" alt="retratos varios" />
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria2.jpeg" alt="retratos varios" />
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria3.jpeg" alt="retratos varios" />
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria4.jpeg" alt="retratos varios" />
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria5.jpeg" alt="retratos varios" />
            <img data-aos="fade-right" data-aos-duration="1000" src="/imgGaleria/galeria6.jpeg" alt="retratos varios" />
          </div>
          <div className='w-[35%] flex flex-col gap-4'>
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria14.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria15.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria16.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria17.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria13.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria18.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria19.jpeg" alt="retratos varios" />
            <img data-aos="fade-down" data-aos-duration="1000" src="/imgGaleria/galeria20.jpeg" alt="retratos varios" />
          </div>
          <div className='w-[30%] flex flex-col gap-4'>
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria7.jpeg" alt="retratos varios" />
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria8.jpeg" alt="retratos varios" />
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria9.jpeg" alt="retratos varios" />
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria10.jpeg" alt="retratos varios" />
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria11.jpeg" alt="retratos varios" />
            <img data-aos="fade-left" data-aos-duration="1000" src="/imgGaleria/galeria12.jpeg" alt="retratos varios" />
          </div>
        </article>
      </section>



    </div>
  )
}
