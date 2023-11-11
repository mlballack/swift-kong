<script>
    import { educations, experiences } from "$lib/config";
</script>

<section class="education" id="education">
    <div class="w-full">
        <h2 class="heading">My Journey</h2>
    </div>

    <div class="education-row">
        <div class="education-column">
            <h3 class="title">Education</h3>
            <div class="education-box">
                <div class="education-content">
                    {#each educations as edu}
                        <div class="content">
                            <div class="year">
                                <i class="bx bxs-calendar" />
                                {edu.period}
                            </div>
                            <h3>{edu.degree} Degree</h3>
                            <p
                                class="mr-3 font-medium text-xs text-gray-600 dark:text-gray-500"
                            >
                                {edu.university}
                            </p>
                            {#each edu.studies as study}
                                <p>- {study}</p>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="education-column">
            <h3 class="title">Experience</h3>
            <div class="education-box">
                <div class="education-content">
                    {#each experiences as exp}
                        <div class="content">
                            <div class="year">
                                <i class="bx bxs-calendar" />
                                {exp.period}
                            </div>
                            <h3>{exp.product_name}</h3>
                            <p
                                class="mr-3 font-medium text-xs text-gray-600 dark:text-gray-500"
                            >
                                {exp.target}
                            </p>
                            {#each exp.features as feature}
                                <p>- {feature}</p>
                            {/each}
                            <div class="flex flex-wrap">
                                {#each exp.skills as skill}
                                    <p
                                        class="mr-3 font-medium text-xs text-green-700 dark:text-green-700"
                                    >
                                        {skill}
                                    </p>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --main-color: #22c55e;
    }

    .heading {
        font-size: 2rem;
        margin: 0 0 1.5rem;
        display: flex;
        justify-content: left;
    }

    .education {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: auto;
        padding-bottom: 5rem;
    }

    .education .education-row {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
    }

    .education-row .education-column {
        flex: 1 1 4rem;
    }

    .education-column .title {
        font-size: 1.5rem;
        margin: 0 0 1.5rem 0rem;
    }

    .education-column .education-box {
        border-left: 0.2rem solid var(--main-color);
    }

    .education-box .education-content {
        position: relative;
        padding-left: 2rem;
    }

    .education-box .education-content::before {
        content: "";
        position: absolute;
        top: 0;
        left: -0.8rem;
        width: 1.5rem;
        height: 1.5rem;
        background: var(--main-color);
        border-radius: 50%;
    }

    .education-content .content {
        position: relative;
        padding: 1.5rem;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        margin-bottom: 2rem;
    }

    .education-content .content .year {
        font-size: 1.1rem;
        color: var(--main-color);
        padding-bottom: 0.5rem;
    }

    .education-content .content .year i {
        padding-right: 0.5rem;
    }

    .education-content .content h3 {
        font-size: 1.2rem;
    }

    .education-content .content p {
        font-size: 1rem;
        padding-top: 0.5rem;
    }
</style>
