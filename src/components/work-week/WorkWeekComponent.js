import './workWeek.css'

export const WorkWeekComponent = ({ text }) => {
    return (
        <section className="work-week" id="work-week">
            <article className="sub-contacts">
                <h2>{text.mainHeader}</h2>
                <div className="divider"></div>

                <div className="days">

                    <div className="day">
                        <h2>{text.monday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>22:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>20:30</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.tuesday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>22:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>20:30</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.wednesday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>22:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>20:30</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.thursday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>22:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>20:30</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="days">

                    <div className="day">
                        <h2>{text.friday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>23:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>22:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.saturday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>07:00</p>
                                <p>23:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>07:30</p>
                                <p>22:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.sunday}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>08:00</p>
                                <p>20:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>08:00</p>
                                <p>18:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="day">
                        <h2>{text.holidays}</h2>

                        <div className='season'>
                            <div className='summer'>
                                <h3>Summer</h3>
                                <p>08:00</p>
                                <p>20:00</p>
                            </div>
                            <div className='winter'>
                                <h3>Winter</h3>
                                <p>08:00</p>
                                <p>18:00</p>
                            </div>
                        </div>
                    </div>

                </div>


            </article>
        </section>
    )
}