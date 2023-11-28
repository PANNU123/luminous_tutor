<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Example 1</title>

    <style>
        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }
        a {
            color: #5D6975;
            text-decoration: underline;
        }

        body {
            position: relative;
            /*width: 21cm;*/
            height: 29.7cm;
            margin: 0 auto;
            color: #001028;
            background: #FFFFFF;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-family: Arial;
        }

        header {
            padding: 10px 0;
            margin-bottom: 30px;
        }

        #logo {
            text-align: center;
            margin-bottom: 10px;
        }

        #logo img {
            width: 90px;
        }

        h1 {
            border-top: 1px solid  #5D6975;
            border-bottom: 1px solid  #5D6975;
            color: #5D6975;
            font-size: 2.4em;
            line-height: 1.4em;
            font-weight: normal;
            text-align: center;
            margin: 0 0 20px 0;
            background: #00ab55;
        {{--background: url({{$bg_logo}});--}}
}

        #project {
            float: left;
        }

        #project span {
            color: #5D6975;
            text-align: right;
            width: 52px;
            margin-right: 10px;
            display: inline-block;
            font-size: 0.8em;
        }

        #company {
            float: right;
            text-align: right;
        }

        #project div,
        #company div {
            white-space: nowrap;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
        }

        table tr:nth-child(2n-1) td {
            background: #F5F5F5;
        }

        table th,
        table td {
            text-align: center;
        }

        table th {
            padding: 5px 20px;
            color: #5D6975;
            border-bottom: 1px solid #C1CED9;
            white-space: nowrap;
            font-weight: normal;
        }

        table .service,
        table .desc {
            text-align: left;
        }

        table td {
            padding: 20px;
            text-align: right;
        }

        table td.service,
        table td.desc {
            vertical-align: top;
        }

        table td.unit,
        table td.qty,
        table td.total {
            font-size: 1.2em;
        }

        table td.grand {
            border-top: 1px solid #5D6975;;
        }

        #notices .notice {
            color: #5D6975;
            font-size: 1.2em;
        }

        footer {
            color: #5D6975;
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #C1CED9;
            padding: 8px 0;
            text-align: center;
        }
    </style>
</head>
<body>
<header class="clearfix">
    <div id="logo">
        {{--        <img alt="image" src="{{$logo}}">--}}
    </div>
    <h1>Attendance Report : {{ $from }} - {{ $to }}</h1>

    <div id="project" class="clearfix">
        <div>{{$user->first_name}} {{ $user->last_name }}</div>
        <div>{{$user?->professionaldata?->department?->name}} {{$user?->professionaldata?->designation?->name}} </div>
        <div>Gender : {{$user->gender}}</div>
        <div>{{$user->mobile}}</div>
        <div><a href="#">{{$user->email}}</a></div>
    </div>
    <div id="company" class="clearfix">
        <div>Company : {{ $user->company->name }}</div>
        <div>{{ $user->company->address }} {{ $user->company->post_code }} <br /> {{ $user->company->state }}, {{ $user->company->city }}</div>
        <div>{{ $user->company->phone_no }}</div>
        <div><a href="#">{{ $user->company->email }}</a></div>
    </div>
</header>
<main>
    <table>
        <thead>
        <tr>
            <th class="desc">Title</th>
            <th class="desc">Project Name</th>
            <th class="desc">Task Priority</th>
            <th class="desc">Start Date</th>
            <th class="desc">End Date</th>
            <th class="desc">Duration</th>
            <th class="desc">Author Comment</th>
            <th class="desc">User Comment</th>
            <th class="desc">Task Remarks</th>
            <th class="desc">Task Marking</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $item)
            <tr>
                <td class="desc">{{$item->task_title ?? ""}}</td>
                <td class="desc">{{$item->project->name ?? ""}}</td>
                <td class="desc">{{$item->task_priority ?? ""}}</td>
                <td class="desc">{{$item->task_approximate_start_date ?? ""}}</td>
                <td class="desc">{{$item->task_approximate_start_date ?? ""}}</td>
                <td class="desc">{{$item->shift->task_total_hours ?? ""}}</td>
                <td class="desc">{{$item->task_author_comment ?? ""}}</td>
                <td class="desc">{{$item->task_assigned_user_comment ?? ""}}</td>
                <td class="desc">{{$item->task_remarks ?? ""}}</td>
                <td class="desc">{{$item->task_marking ?? ""}}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</main>
</body>
</html>