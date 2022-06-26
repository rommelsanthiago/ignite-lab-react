import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { useSelector } from 'react-redux';
import classNames from 'classnames';

export function Sidebar() {
    const { data } = useGetLessonsQuery();

    const OpenMenu = useSelector(state => state);

    return(
        <aside className={classNames("w-[348px] bg-gray-700 p-6 border-l border-gray-600", {
            "sm:hidden": !OpenMenu,
            "sm:w-screen block absolute z-50 top-15 right-0": OpenMenu
        })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block" >
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}