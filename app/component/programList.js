import ico from '../public/copy/ico_image.gif';
import { useRouter } from 'next/navigation';

const ProgramList = ({ index, category, title, date, viewCount }) => {
    const router = useRouter();

    const naviTo = () => {
        router.push(`/pages/bbs_shop/${index - 1}`);
    };
    return (
        <li class="clr">
            <div class="td col_no">{index}</div>
            <div class="td inf col_category">{category}</div>
            <div class="td col_subject">
                <div>
                    <a
                        onClick={() => {
                            naviTo();
                        }}
                    >
                        <span>{title}</span>

                        <img src={ico.src} height="12" alt="image" />
                    </a>
                </div>
            </div>
            <div class="td inf col_date">{date}</div>
            <div class="td inf col_hit">
                <span class="txt">조회수:</span>
                {viewCount}
            </div>
        </li>
    );
};

export default ProgramList;
