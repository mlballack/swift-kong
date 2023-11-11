<!-- Ref: https://www.youtube.com/watch?v=sQoiM7i5Nqc -->

<script>
    import { skills } from "$lib/config";
</script>

<section class="skills" id="skills">
    <div class="skills-row">
        <div class="skills-column">
            <h3 class="title">Coding Skills</h3>

            <div class="skills-box">
                <div class="skills-content">
                    {#each skills as skill}
                        <div class="progress">
                            <h3>{skill.laung} <span>{skill.level}%</span></h3>
                            <div class="bar">
                                <span style="width: {skill.level}%;" />
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .skills {
        min-height: auto;
        padding-bottom: 7rem;
        /* background: var(--main-color); */
    }

    .skills .skills-row {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
    }

    .skills-row .skills-column {
        flex: 1 1 40rem;
    }

    .skills-column .title {
        font-size: 2rem;
        margin: 0 0 1.5rem;
    }

    .skills-box .skills-content {
        position: relative;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        padding: 0.5rem 1.5rem;
    }

    .skills-content .progress {
        padding: 1rem 0;
    }

    .skills-content .progress h3 {
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
    }

    .skills-content .progress h3 span {
        color: var(--main-color);
    }

    .skills-content .progress .bar {
        height: 2.5rem;
        border-radius: 0.6rem;
        border: 0.2rem solid var(--main-color);
        padding: 0.5rem;
        margin: 1rem 0;
    }

    .skills-content .progress .bar span {
        display: block;
        border-radius: 0.3rem;
        background: var(--main-color);
        height: 100%;
    }
</style>
