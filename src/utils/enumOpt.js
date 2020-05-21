/**
 * Created by jin.zhouhang on 17-9-21 下午3:02.
 *
 * 枚举处理工具
 */
const enumUtils = {
    install: function (Vue) {
        Vue.prototype.$enumUtils = {
            toMsg(enumName, code) {

                var enumOpts = [];
                /** 借条状态*/
                enumOpts[0] = {
                    enumName: 'LoanStatusEnum', values: [
                        {code: 'INIT', message: '新增借款'},
                        {code: 'SUBMITED', message: '审核中'},
                        {code: 'RAISECONFIRM', message: '财务确认'},
                        {code: 'AUDITED', message: '回款中'},
                        {code: 'REPAYCONFIRM', message: '还款确认'},
                        {code: 'SETTLED', message: '已结清'},
                        {code: 'OVERDUED', message: '已逾期'},
                        {code: 'CANCELED', message: '已作废'},
                    ]
                };
                /** 借款类型*/
                enumOpts[1] = {
                    enumName: 'LoanTypeEnum', values: [
                        {code: 'NEW', message: '新增'},
                        {code: 'CONTINUE', message: '续贷'},
                        {code: 'EXTENSION', message: '展期'},
                        {code: 'PART_EXT', message: '减额展期'},
                    ]
                };
                /** 结转方式*/
                enumOpts[2] = {
                    enumName: 'LoanBackTypeEnum', values: [
                        {code: 'SETTL', message: '正常结清'},
                        {code: 'CONTINUE', message: '续贷结清'},
                        {code: 'EXTENSION', message: '展期结清'},
                        {code: 'PART_EXT', message: '减额结清'},
                        {code: 'OVERDUE', message: '逾期结清'},
                        {code: 'AHEAD', message: '提前结清'},
                    ]
                };
                /** 联系类型*/
                enumOpts[3] = {
                    enumName: 'LoanOperateTypeEnum', values: [
                        {code: 'SUBMITING', message: '提交借款'},
                        {code: 'AUDITING', message: '财务通过'},
                        {code: 'REFUSEING', message: '退回'},
                        {code: 'REMINDING', message: '结转提醒'},
                        {code: 'OVERDUING', message: '自动逾期'},
                        {code: 'CONFIRMING', message: '结转确认'},
                        {code: 'CANCELING', message: '借款作废'},
                    ]
                };
                /** 客户联系类型*/
                enumOpts[4] = {
                    enumName: 'ClientContactTypeEnum', values: [
                        {code: 'SALE', message: '销售联系'},
                        {code: 'APPLY', message: '借款申请'},
                        {code: 'AUDIT', message: '财务通过'},
                        {code: 'CHECK', message: '贷后检查'},
                        {code: 'REMIND', message: '结转提醒'},
                        {code: 'COLLECT', message: '逾期催收'},
                    ]
                };
                /** 逾期状态*/
                enumOpts[5] = {
                    enumName: 'CollectStatusEnum', values: [
                        {code: 'INIT', message: '新增催收'},
                        {code: 'FOLLOW', message: '已跟进'},
                        {code: 'SUBMITED', message: '财务确认'},
                        {code: 'BACKED', message: '已还款'},
                        {code: 'OUTSOURCE', message: '委外催收'},
                    ]
                };
                /** 逾期结清方式*/
                enumOpts[6] = {
                    enumName: 'BackedModeEnum', values: [
                        {code: 'SETTLED', message: '结清'},
                        {code: 'PART', message: '部分还款'},
                    ]
                };

                /** 文件状态*/
                enumOpts[7] = {
                    enumName: 'OriginIndexStateEnum', values: [
                        {code: 'INIT', message: '初始化'},
                        {code: 'ERROR', message: '错误'},
                        {code: 'FINISH', message: '结束'},
                    ]
                };
                /** 银行卡类型 */
                enumOpts[8] = {
                    enumName: 'CardRelationEnum', values: [
                        {code: 'LEND', message: '回款卡'},
                        {code: 'BACKUP', message: '回款备选卡'},
                        {code: 'RAISE', message: '放款卡'},
                        {code: 'COLLECT', message: '催收卡'},
                    ]
                };

                /** 银行卡状态 */
                enumOpts[9] = {
                    enumName: 'CardStateEnum', values: [
                        {code: 'ENABLED', message: '有效'},
                        {code: 'UNABLED', message: '无效'},
                    ]
                };

                /** 划款状态 */
                enumOpts[10] = {
                    enumName: 'BackedStatusEnum', values: [
                        {code: 'SUBMITED', message: '待审核'},
                        {code: 'AUDITED', message: '已确认'},
                        {code: 'CANCELED', message: '已作废'},
                        {code: 'HOLDED', message: '已挂起'},
                    ]
                };


                /** 还款方式 */
                enumOpts[11] = {
                    enumName: ' BackedModeEnum', values: [
                        {code: 'SETTLED', message: '结清'},
                        {code: 'PART', message: '部分还款'},
                    ]
                };

                /** 还款类型 */
                enumOpts[12] = {
                    enumName: 'BackedTypeEnum', values: [
                        {code: 'REMIND', message: '提醒还款'},
                        {code: 'COLLECT', message: '催收还款'},
                    ]
                };

                /** 用户类型 */
                enumOpts[13] = {
                    enumName: 'UserStatusEnum', values: [
                        {code: 'NORMAL', message: '正常'},
                        {code: 'LEAVE', message: '离职'},
                    ]
                }

                /** 放款单类型 */
                enumOpts[14] = {
                    enumName: 'LoanRaiseTypeEnum', values: [
                        {code: 'TRANSFER', message: '线下转账'},
                        {code: 'PAY', message: '代付'},
                    ]
                };

                /** 放款单状态 */
                enumOpts[15] = {
                    enumName: 'LoanRaiseStatusEnum', values: [
                        {code: 'INIT', message: '新创建'},
                        {code: 'WAIT', message: '待处理'},
                        {code: 'SUCC', message: '处理成功'},
                        {code: 'FAIL', message: '处理失败'},
                    ]
                };

                /** 客户来源 */
                enumOpts[16] = {
                    enumName: 'ClientOriginTypeEnum', values: [
                        {code: 'EXCEL', message: '白名单'},
                        {code: 'HTTP', message: '天女引流'},
                        {code: 'ESALE', message: '电销'},
                    ]
                };


                /** 还款类型 */
                enumOpts[17] = {
                    enumName: 'BackedTypeEnum', values: [
                        {code: 'REMIND', message: '提醒还款'},
                        {code: 'COLLECT', message: '催收还款'},
                    ]
                }

                /** 还款方式 */
                enumOpts[18] = {
                    enumName: 'BackedTransferTypeEnum', values: [
                        {code: 'TRANSFER', message: '线下转账'},
                        {code: 'PROTOCOL', message: '协议代扣'},
                    ]
                };

                /** 还款状态 */
                enumOpts[19] = {
                    enumName: 'BackedStatusEnum', values: [
                        {code: 'SUBMITED', message: '待审核'},
                        {code: 'AUDITED', message: '已确认'},
                        {code: 'FAIL', message: '已失败'},
                        {code: 'CANCELED', message: '已作废'},
                    ]
                };

                /** 还款类别 */
                enumOpts[20] = {
                    enumName: 'BackedModeEnum', values: [
                        {code: 'SETTLED', message: '结清'},
                        {code: 'PART', message: '部分还款'},
                    ]
                };

                /** 还款类别 */
                enumOpts[21] = {
                    enumName: 'CollectBizTypeEnum', values: [
                        {code: 'service-pandora', message: 'pandora'},
                    ]
                };


                /** 客户状态 */
                enumOpts[22] = {
                    enumName: 'ClientStateEnum', values: [
                        {code: 'NORMAL', message: '正常'},
                        {code: 'RELEASE', message: '已释放'},
                        {code: 'SIGNED', message: '已签约'},
                        {code: 'FROZEN', message: '已冻结'},
                    ]
                }

                /** 小米分放款单状态 */
                enumOpts[23] = {
                    enumName: 'XmRaiseBackedStatus', values: [
                        {code: 'CREATED', message: '新创建'},
                        {code: 'SUBMITED', message: '提交处理'},
                        {code: 'FINISHED', message: '处理完成'},
                    ]
                };

                /** 成功和失败状态 */
                enumOpts[24] = {
                    enumName: 'SuccessAndFail', values: [
                        {code: 'FAIL', message: '失败'},
                        {code: 'SUCCESS', message: '成功'},
                    ]
                };


                for (var enumOptNum in enumOpts) {
                    if (enumOpts[enumOptNum].enumName == enumName) {
                        for (var msgNum in enumOpts[enumOptNum].values) {
                            if (enumOpts[enumOptNum].values[msgNum].code == code) {
                                return enumOpts[enumOptNum].values[msgNum].message
                            }
                        }
                    }
                }
                return ' '
            },

            toValue(enumName) {
                var enumOpts = [];

                /** 银行卡 */
                enumOpts[0] = {
                    enumName: 'BackedListEnum', values: [
                        {value: 'CCB', label: '建设银行'},
                        {value: 'ICBC', label: '工商银行'},
                        {value: 'PINAGAN', label: '平安银行'},
                        {value: 'ABC', label: '农业银行'},
                        {value: 'CMB', label: '招商银行'},
                        {value: 'PSBC', label: '邮储银行'},
                        {value: 'CMBC', label: '民生银行'},
                        {value: 'CEB', label: '光大银行'},
                        {value: 'CITIC', label: '中信银行'},
                        {value: 'CIB', label: '兴业银行'},
                        {value: 'SPDB', label: '浦发银行'},
                        {value: 'BOC', label: '中国银行'},
                        {value: 'COMM', label: '交通银行'},
                        {value: 'GDB', label: '广发银行'},
                        {value: 'HXB', label: '华夏银行'},
                        {value: 'BJB', label: '北京银行'},
                        {value: 'SHB', label: '上海银行'},
                    ]
                }

                /** 小米分逾期状态*/
                enumOpts[1] = {
                    enumName: 'LoanCollectStatusEnum', values: [
                        {value: 'INIT', label: '新增催收'},
                        {value: 'FOLLOW', label: '已跟进'},
                        {value: 'BACKED', label: '已还款'},
                        {value: 'OUTSOURCE', label: '委外'},
                    ]
                };

                /** 小米分还款状态*/
                enumOpts[2] = {
                    enumName: 'LoanRemindStatusEnum', values: [
                        {value: 'BACKING', label: '回款中'},
                        {value: 'SETTLED', label: '已结清'},
                        {value: 'OVERDUED', label: '已逾期'},
                    ]
                };

                /** 小米分还款单状态*/
                enumOpts[3] = {
                    enumName: 'LoanBackedStatusEnum', values: [
                        {value: 'CREATED', label: '新创建'},
                        {value: 'SUBMITED', label: '提交处理'},
                        {value: 'FINISHED', label: '处理完成'},
                    ]
                };

                /** */
                enumOpts[4] = {
                    enumName: 'DutyManagementEnums', values: [
                        {name: '财务组', value: 'F001'},
                        {name: '提醒一组', value: 'T001'},
                        {name: '提醒二组', value: 'K001'},
                        {name: '营销一组', value: 'YX01'},
                        {name: '营销二组', value: 'YX02'},
                        {name: '营销三组', value: 'YX03'},
                        {name: '营销四组', value: 'YX04'},
                        {name: '昆明提醒一组', value: 'KMTX01'},
                        {name: '昆明营销一组', value: 'KMYX01'},
                        {name: '昆明营销二组', value: 'KMYX02'},
                        {name: '昆明营销三组', value: 'KMYX03'},
                        {name: '断约营销一组', value: 'R001'},
                        {name: '断约营销二组', value: 'R002'},
                        {name: '催收1-3', value: 'FOLLOW_1_3'},
                        {name: '小米分催收', value: 'FOLLOW_XIAOMI'},
                        {name: '保有花提醒', value: 'FOLLOW_BYH'},
                        {name: '保有花催收', value: 'COLLECT_BYH'},
                    ]
                };

                for (var enumOptNum in enumOpts) {
                    if (enumOpts[enumOptNum].enumName == enumName) {
                        return enumOpts[enumOptNum].values;
                    }
                }
                return ' '
            },


        }

    }
}
export default enumUtils

