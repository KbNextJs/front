import ico from '../public/copy/ico_image.gif';
import { useRouter } from 'next/navigation';

const NotificationList = ({ index, title, date, viewCount }) => {
    const router = useRouter();

    const naviTo = () => {
        console.log('bhaflbabh');
        router.push(`/pages/bbs_shop/noti/${index-1}`);
    };
    return (
        <li class="clr">
            <div class="td col_no">
                <span class="td_col_no_span">공지</span>
            </div>
            <div class="td col_category"></div>
            <div class="td col_subject">
                <a
                    onClick={() => {
                        naviTo();
                    }}
                >
                    <span>{title}</span>
                </a>
            </div>
            <div class="td col_name"></div>
            <div class="td inf col_date">{date}</div>
            <div class="td inf col_hit">
                <span class="txt">조회수:</span>
                {viewCount}
            </div>
        </li>
    );
};

export default NotificationList;
